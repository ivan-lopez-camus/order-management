import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/core/services/order.service';
import { Order } from 'src/app/shared/models/orderModel';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cliente', 'productos', 'total'];
  dataSource = new MatTableDataSource([
    { id: 1, cliente: 'Juan Pérez', productos: 'Producto A, Producto B', total: 500 },
    { id: 2, cliente: 'María López', productos: 'Producto C', total: 300 },
  ]);
  orders: Order[] = [];
 // displayedColumns: string[] = ['id', 'customer', 'total', 'actions'];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (data) => (this.orders = data),
      error: (err) => console.error('Error fetching orders', err),
    });
  }

  deleteOrder(id: string): void {
    this.orderService.deleteOrder(id).subscribe(() => this.loadOrders());
  }
}
