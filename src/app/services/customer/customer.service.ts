import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from 'src/app/models/booking_models/customer';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  public addCustomer(cust: Customer) {

    return this.http.post("http://localhost:8090/api/user/", cust, { responseType: "text" });

  }

  public updateCustomer(cust: Customer, id: number){

    return this.http.put("http://localhost:8090/api/user/" + id, cust, { responseType: "json" });

  }

  public getCustomerById(id: number) {

    return this.http.get("http://localhost:8090/api/user/" + id, { responseType: "json" });

  }
}
