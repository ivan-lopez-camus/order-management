import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';  // Import the necessary Material modules
import { Order } from 'src/app/shared/models/orderModel';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  order: Order;

  constructor(
    public dialogRef: MatDialogRef<OrderFormComponent>,  // To control the modal
    @Inject(MAT_DIALOG_DATA) public data: any  // To receive the passed data
  ) {
    this.order = data.orderData;  // Receive the order data passed from the parent component
  }

  ngOnInit(): void {}

  // Method to save the order
  saveOrder(): void {
    console.log('Pedido guardado:', this.order);
    this.dialogRef.close('save');  // Close the modal and pass 'save' if saving is successful
  }

  // Method to cancel and close the modal without saving
  cancel(): void {
    this.dialogRef.close();  // Simply close the modal without any action
  }
}
