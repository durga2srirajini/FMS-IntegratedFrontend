import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPassword } from 'src/app/models/forgotPassword';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private httpClient:HttpClient) { }
  // ForgotCustomer(cforgot:ForgotPassword):Observable<any>{
  //   return this.httpClient.put('http://localhost:8090/api/user/forgotPassword/52',cforgot.password,{responseType:"json"});
  // }

  ForgotCustomer(cforgot:ForgotPassword):Observable<any>{
    return this.httpClient.put('http://localhost:8090/api/user/forgotPassword/'+cforgot.email,cforgot.password,{responseType:"json"});
  }
}
