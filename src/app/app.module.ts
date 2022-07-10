import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
//import { AddressComponent } from './address/address.component';
import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { UserAddressComponent } from './user-address/user-address.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    BillComponent,
    OrdersComponent,
    UserAddressComponent,
    DeleteComponent
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
