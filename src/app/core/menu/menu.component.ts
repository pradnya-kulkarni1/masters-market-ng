import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu-item';
import { SystemService } from '../../service/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {  
  title: string = 'Menu';
menuItems: MenuItem[] = [];
welcomeMsg?: string = undefined;

constructor(private sysSvc: SystemService) { }
ngOnInit(): void {

  // we will create menu item for each menu item in our menu : user, product, vendor

 
this.menuItems.push(new MenuItem("Fruits","/product/type/Fruits","product type"));
this.menuItems.push(new MenuItem("Veggies","/product/type/Veggie","product type"));
this.menuItems.push(new MenuItem("Grains","/product/type/Grain","product type"));
this.menuItems.push(new MenuItem("Dairy","/product/type/Dairy","product type"));
this.menuItems.push(new MenuItem("Snacks","/product/type/Snacks","product type"));
this.menuItems.push(new MenuItem("Cart","/product/type","product fruit"));

this.sysSvc.checkLogin;
if (this.sysSvc.loggedInUser.id ==0){
  this.menuItems.push(new MenuItem("Customer-Login","/customer/login","Customer Login"));
}
else if(this.sysSvc.loggedInUser != undefined){
  this.welcomeMsg = "Hi, "+this.sysSvc.loggedInUser.firstname;
  this.menuItems.push(new MenuItem("Logout","/customer/login","Customer Login"));

}
}
}
