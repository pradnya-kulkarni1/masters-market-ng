import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './feature/customer/customer-list/customer-list.component';
import { CustomerLoginComponent } from './feature/customer/customer-login/customer-login.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { ProductTypeComponent } from './feature/product-type/product-type/product-type.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:ProductListComponent},
  {path:'customer/list',component:CustomerListComponent},
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'product/type/:type',component:ProductTypeComponent},
  {path:'**',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
