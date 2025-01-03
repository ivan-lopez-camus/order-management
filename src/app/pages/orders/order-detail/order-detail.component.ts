import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from 'src/app/shared/models/orderModel'; // Ajusta la ruta de tu modelo

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {
  // Inyectar MatDialogRef para poder cerrar el modal
  constructor(
    public dialogRef: MatDialogRef<OrderDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public order: Order
  ) {}

  // Método para cerrar el modal
  onClose(): void {
    this.dialogRef.close();  // Cierra el modal
  }
}
