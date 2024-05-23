import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './feature/customer/customer-list/customer-list.component';
import { CustomerLoginComponent } from './feature/customer/customer-login/customer-login.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { ProductTypeComponent } from './feature/product-type/product-type/product-type.component';
import { LineItemListComponent } from './feature/lineItem/line-item-list/line-item-list.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { LineItemEditComponent } from './feature/lineItem/line-item-edit/line-item-edit.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:ProductListComponent},
  {path:'customer/list',component:CustomerListComponent},
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'product/type/:type',component:ProductTypeComponent},
  {path:'lineItem/list',component:LineItemListComponent},
  {path:'request/create',component:RequestCreateComponent},
  {path:'lineItem/edit',component:LineItemEditComponent},
  {path:'**',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
