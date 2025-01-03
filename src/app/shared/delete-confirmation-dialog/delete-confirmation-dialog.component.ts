import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.scss']
})
export class DeleteConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { orderId: string },
    private orderService: OrderService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    // Llamamos al servicio para eliminar el pedido
    this.orderService.deleteOrder(this.data.orderId).subscribe(
      () => {
        this.dialogRef.close('confirm');
      },
      (error: any) => {
        console.error('Error al eliminar el pedido', error);
        this.dialogRef.close('error');
      }
    );
  }
}
