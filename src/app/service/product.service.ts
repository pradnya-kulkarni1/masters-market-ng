import { Product } from "../model/product";
import {HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const URL: string = 'http://localhost:8080/api/products';

@Injectable({
    providedIn: 'root',
})

export class ProductService{

    constructor(private http: HttpClient){}

    getAllProducts(): Observable<Product[]> {
        return this.http.get(URL+'/') as Observable<Product[]>;
    }

    getProductById(id:number):Observable<Product> {
        return this.http.get(URL + '/'+id) as Observable<Product>;
    }

    getAllProductByType(type:string):Observable<Product[]>{
        return this.http.get(URL+ '/type/'+type) as Observable<Product[]>;
    }
}