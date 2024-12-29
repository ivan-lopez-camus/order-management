export interface Order {
  id: string;  // MongoDB usa un identificador tipo string (ObjectId)
  clienteId: number;  // Referencia al ID de un cliente en la base de datos relacional
  productos: DetalleProducto[];
  total: number;
}

export interface DetalleProducto {
  productoId: number;
  cantidad: number;
  precioUnitario: number;
}
