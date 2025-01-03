import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Order, DetalleProducto } from 'src/app/shared/models/orderModel';
import { DeleteConfirmationDialogComponent } from 'src/app/shared/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { OrderFormComponent } from '../order-form/order-form.component';
import { OrderDetailComponent } from '../order-detail/order-detail.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cliente', 'productos', 'total', 'acciones'];
  dataSource = new MatTableDataSource<Order>([
    {
      id: '1',
      clienteId: 101,
      productos: [
        { productoId: 1, cantidad: 2, precioUnitario: 250 },
        { productoId: 2, cantidad: 1, precioUnitario: 250 }
      ],
      total: 500
    },
    {
      id: '2',
      clienteId: 102,
      productos: [
        { productoId: 3, cantidad: 1, precioUnitario: 300 }
      ],
      total: 300
    },
    {
      id: '3',
      clienteId: 103,
      productos: [
        { productoId: 4, cantidad: 1, precioUnitario: 150 }
      ],
      total: 150
    },
    {
      id: '4',
      clienteId: 104,
      productos: [
        { productoId: 5, cantidad: 3, precioUnitario: 233.33 }
      ],
      total: 700
    },
    {
      id: '5',
      clienteId: 105,
      productos: [
        { productoId: 6, cantidad: 2, precioUnitario: 100 },
        { productoId: 7, cantidad: 5, precioUnitario: 200 }
      ],
      total: 1200
    },
    {
      id: '6',
      clienteId: 106,
      productos: [
        { productoId: 8, cantidad: 3, precioUnitario: 500 }
      ],
      total: 1500
    },
    {
      id: '7',
      clienteId: 107,
      productos: [
        { productoId: 9, cantidad: 2, precioUnitario: 150 },
        { productoId: 10, cantidad: 3, precioUnitario: 100 }
      ],
      total: 750
    },
    {
      id: '8',
      clienteId: 108,
      productos: [
        { productoId: 11, cantidad: 4, precioUnitario: 200 }
      ],
      total: 800
    },
    {
      id: '9',
      clienteId: 109,
      productos: [
        { productoId: 12, cantidad: 1, precioUnitario: 450 }
      ],
      total: 450
    },
    {
      id: '10',
      clienteId: 110,
      productos: [
        { productoId: 13, cantidad: 2, precioUnitario: 350 }
      ],
      total: 700
    },
    {
      id: '11',
      clienteId: 111,
      productos: [
        { productoId: 14, cantidad: 3, precioUnitario: 120 }
      ],
      total: 360
    },
    {
      id: '12',
      clienteId: 112,
      productos: [
        { productoId: 15, cantidad: 1, precioUnitario: 500 }
      ],
      total: 500
    },
    {
      id: '13',
      clienteId: 113,
      productos: [
        { productoId: 16, cantidad: 4, precioUnitario: 120 },
        { productoId: 17, cantidad: 2, precioUnitario: 80 }
      ],
      total: 640
    },
    {
      id: '14',
      clienteId: 114,
      productos: [
        { productoId: 18, cantidad: 5, precioUnitario: 250 }
      ],
      total: 1250
    },
    {
      id: '15',
      clienteId: 115,
      productos: [
        { productoId: 19, cantidad: 3, precioUnitario: 350 }
      ],
      total: 1050
    },
    {
      id: '16',
      clienteId: 116,
      productos: [
        { productoId: 20, cantidad: 1, precioUnitario: 600 }
      ],
      total: 600
    },
    {
      id: '17',
      clienteId: 117,
      productos: [
        { productoId: 21, cantidad: 2, precioUnitario: 120 },
        { productoId: 22, cantidad: 1, precioUnitario: 450 }
      ],
      total: 690
    },
    {
      id: '18',
      clienteId: 118,
      productos: [
        { productoId: 23, cantidad: 4, precioUnitario: 110 }
      ],
      total: 440
    },
    {
      id: '19',
      clienteId: 119,
      productos: [
        { productoId: 24, cantidad: 3, precioUnitario: 200 }
      ],
      total: 600
    },
    {
      id: '20',
      clienteId: 120,
      productos: [
        { productoId: 25, cantidad: 2, precioUnitario: 550 }
      ],
      total: 1100
    }
  ]);


  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  // Abre el modal de confirmación para eliminar
  openDeleteDialog(order: Order): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '300px',
      data: { orderId: order.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.deleteOrder(order.id);
      }
    });
  }

  // Lógica de eliminación
  deleteOrder(id: string): void {
    // Lógica para eliminar el pedido de la lista
    this.dataSource.data = this.dataSource.data.filter((order: { id: string; }) => order.id !== id);
  }

  // Abre el modal de edición del pedido
  editOrder(order: Order): void {
    const dialogRef = this.dialog.open(OrderFormComponent, {
      width: '500px',
      data: { orderData: order }  // Pasamos los datos del pedido al modal
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'save') {
        // Si se guarda el pedido, podrías hacer algo aquí como actualizar la lista de pedidos
      }
    });
  }

  openDetailDialog(order: Order): void {
    const dialogRef = this.dialog.open(OrderDetailComponent, {
      width: '600px',  // Puedes ajustar el tamaño del modal
      data: order      // Pasamos el pedido seleccionado al componente de detalle
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró', result);
    });
  }
}
