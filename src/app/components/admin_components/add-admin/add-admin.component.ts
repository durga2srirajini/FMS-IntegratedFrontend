import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/booking_models/customer';
import { AuthHeaderService } from 'src/app/services/authHeaders/auth-header.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
  admin:Customer=new Customer;
  msg:string=""
  errorMsg:string=""
  adminRegister: FormGroup;
  constructor(private formBuilder:FormBuilder,private custService:CustomerService,private auth:AuthHeaderService){
    this.adminRegister=this.formBuilder.group({
      userName:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9_-]{8,15}$')]) ,
      password:new FormControl("",[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$@!%&*?])[A-Za-z\\d#$@!%&*?]{8,}$')]),
      confirmPassword:new FormControl("",[Validators.required]),
      name:new FormControl("",[Validators.required, Validators.pattern('[a-zA-Z ]{3,}$')]),
      email:new FormControl("",[Validators.required,Validators.email, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+(com|in)$")]),
      contactNo:new FormControl("",[Validators.required,Validators.minLength(10),Validators.pattern('^[6-9]{1}?[0-9]{2,9}$')]),
      dob:new FormControl("",[Validators.required,this.birthdateValidator()]),
      address:new FormControl("",[Validators.required,Validators.min(3),Validators.pattern('[a-zA-Z0-9,-\s ]{5,}$')]),
   
    },{validators:this.checkPasswords.bind(this)})
  }
  ngOnInit(){
    this.auth.checkUserTokenValidity();
  }
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')!.value;
    let confirmPass = group.get('confirmPassword')!.value
    return pass === confirmPass ? null : { notSame: true }
  }
  birthdateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const currentDate = new Date();
      const inputDate = new Date(control.value);
      if (inputDate > currentDate) {
        return {'futureDate': true};
      }
      return null;
    };
  }
  
  getControl(name:any):AbstractControl|null{
    return this.adminRegister.get(name)
  }
  get userName(){
    return this.adminRegister.get('userName')
  }

  registerAdmin(){
    console.log (this.admin);
    this.admin=this.adminRegister.value
    this.admin.role="admin";
    this.custService.addCustomer(this.admin).subscribe(
      {
        next:(data)=>{
          this.msg="Admin added Successfully."
          this.errorMsg=""
          
          console.log(data)},
        error:(err)=>{
          this.errorMsg=err.error
          this.msg=""
          console.log(err)}
      }
    )
  }

  onsub(){
    this.admin=this.adminRegister.value
    this.admin.role="admin"
    console.log(this.admin)
    console.log(this.adminRegister.value)
   
  }
}
