import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './feature/customer/customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './core/menu/menu.component';
import { CustomerLoginComponent } from './feature/customer/customer-login/customer-login.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { ProductTypeComponent } from './feature/product-type/product-type/product-type.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    MenuComponent,
    CustomerLoginComponent,
    ProductListComponent,
    VendorListComponent,
    ProductTypeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
