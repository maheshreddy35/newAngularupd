import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from './Address';
import { Observable } from 'rxjs';
import { Product } from './Product';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OrderAPIService {
  
  
  constructor(private http:HttpClient,private router:Router) { }
  public getProducts(){
    return this.http.get("https://localhost:44373/Orders");
  }
  public getitems(id:Number):Observable<Product>{
    return this.http.get<Product>("https://localhost:44373/OrderItems/"+id);
  }
  public deleteitem(id:Number,oid:Number){
    this.http.delete("https://localhost:44373/OrderItems/"+id).subscribe((data) => 
    console.log(data));
    this.http.delete("https://localhost:44373/Orders/"+oid).subscribe((data) => 
    console.log(data));
    ;

  }
  public getimages(id:number){
    return this.http.get("https://localhost:44373/Products/"+id);
  }

  
  public addAddress(add: Address,uid:number){
    add.userId=uid;
    return this.http.post("https://localhost:44373/Orders",add,{responseType:'text' as 'json'});
   }

   public getAddByID(id:number)
 {
  return this.http.get("https://localhost:44373/Orders/GetUserAdd?uid="+id);
  
 }


 public getOItemsByID(id:number)
 {
  return this.http.get("https://localhost:44373/Orders/GetOrderItems?oid="+id);
  
 }


 public getOrdersByID(id:number)
 {
  return this.http.get("https://localhost:44373/Orders/GetById?id="+id);
  
 }


 goToBill(){
  console.log("Bill");
  this.router.navigate(['/','bill']);
}
 
}
