import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../model/customer";
import { CustomerLogin } from "../model/customer-login";

const URL: string = 'http://localhost:8080/api/customers';

@Injectable({
    providedIn:'root'
})
export class CustomerService{

    constructor(private Http: HttpClient){}
    getAllCustomers():Observable<Customer[]>{
        return this.Http.get(URL+"/") as Observable<Customer[]>;
        
    }

    login(customerlogin: CustomerLogin): Observable<Customer>{
        return this.Http.post(URL+'/login',customerlogin) as Observable<Customer>;
    }
}