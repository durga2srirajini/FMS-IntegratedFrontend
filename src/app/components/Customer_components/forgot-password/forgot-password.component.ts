import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPassword } from 'src/app/models/forgotPassword';
import { ForgotPasswordService } from 'src/app/services/forgotPassword/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  msg?: string
  errorMsg?: string
  confirmPassword?: string
  forgot: ForgotPassword= new ForgotPassword();
  constructor(private forgotService: ForgotPasswordService, private router: Router) { }
  ngOnInit(): void {

  }
  onSubmit() {
    this.forgotService.ForgotCustomer(this.forgot)
      .subscribe({
        next: (data) => {
          console.log("Password successfully changed");
          console.log(data);
          this.msg = "Password successfully changed";
          this.errorMsg = "";
        },
        error: (error) => {
          console.log(error);
          this.errorMsg = "Could not change password";
          this.msg = "";
        }
      })
  }
}
