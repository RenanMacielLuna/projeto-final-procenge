import { VendaItem } from './vendaitem';
import { Cliente } from './../../cliente/servico/cliente';

export class Venda{
  codigo: number;
  data: Date;
  cliente: Cliente;
  listaVendaItem: VendaItem[] = [];
}
