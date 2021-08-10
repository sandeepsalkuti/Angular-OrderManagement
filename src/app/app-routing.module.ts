import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerPageComponent} from '../app/customers/customer-page/customer-page.component';
import {DeliveriesPageComponent} from '../app/deliveries/deliveries-page/deliveries-page.component';
import {OrderPageComponent} from '../app/orders/order-page/order-page.component';
import {ProductPageComponent} from '../app/products/product-page/product-page.component';

const routes: Routes = [
  // { path: '', component:  },
  { path: 'customer-page', component: CustomerPageComponent },
  { path: 'delivery-page', component: DeliveriesPageComponent },
  { path: 'order-page', component: OrderPageComponent },
  { path: 'product-page', component: ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
