import { Component } from '@angular/core';
import { OrderServiceService } from './order-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazon';
  constructor(private ser:OrderServiceService){}
  goTocart(){
    this.ser.goTocart();
  }
  goToOrders(){
    this.ser.goToOrders();
  }
}
