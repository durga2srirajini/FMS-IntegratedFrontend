
import { Component, OnInit } from '@angular/core';

import { AuthHeaderService } from 'src/app/services/authHeaders/auth-header.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
  // image = "../assets/top-band-1647004089.jpg"
  constructor(private auth:AuthHeaderService){}
    ngOnInit(){
  
     this.auth.checkUserTokenValidity();
  
    }

  }


 


