import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AddressComponent } from './address/address.component';
import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';
import { DeleteComponent } from './delete/delete.component';
import { OrdersComponent } from './orders/orders.component';
import { UserAddressComponent } from './user-address/user-address.component';


const routes: Routes = [
  {path:'',redirectTo:'/bill',pathMatch:'full'},
 // {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'bill',component:BillComponent},
  {path:'orders',component:OrdersComponent},
  {path:'address',component:UserAddressComponent},
  {path:'delete',component:DeleteComponent},
  {path:'bill',component:BillComponent}
  // { path: 'reload',
    // redirectTo: 'orders',
    // pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
