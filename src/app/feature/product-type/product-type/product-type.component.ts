import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { SystemService } from '../../../service/system.service';

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
 

  constructor(private productSvc: ProductService,
      sysSvc: SystemService,
      router: Router,
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
}