import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { SystemService } from '../../../service/system.service';
import { RequestService } from '../../../service/request.service';
import {Request} from '../../../model/request';


@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  title: string = 'Product-Type';
  products?: Product[] = undefined;
  adminUser?: boolean = undefined;
  type: string = "";
  isFruit?: boolean=undefined;
  request: Request = new Request();
  message?: string = undefined;
  
 

  constructor(private productSvc: ProductService,
      private sysSvc: SystemService,
      private requestSvc: RequestService,
      private router: Router,
      private route: ActivatedRoute) {  
        
      }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parms) => {
        this.type = parms['type'];
    this.productSvc.getAllProductByType(this.type).subscribe({
      next: (resp) => {
        this.products = resp;
        if(this.type == "Fruit")
          this.isFruit = true;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {}
    });
  },
  error:(err)=> {
    console.log('Error getting type from url: ',err);
  },
  complete: () => {},
});

  }

  add(): void{
    this.requestSvc.createRequest(this.request).subscribe({
      next: (resp) => {
        this.request = resp;
        this.router.navigateByUrl('/request/list');
      },
      error: (err) => {
        console.log("Error creating request: ", err);
        this.message = "Error creating request.";
      },
      complete: () => {}
    });

  }

  }
