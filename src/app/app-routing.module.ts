import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './pages/orders/order-list/order-list.component';
import { OrderFormComponent } from './pages/orders/order-form/order-form.component';


const routes: Routes = [
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/edit/:id', component: OrderFormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
