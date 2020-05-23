import { Venda } from './venda';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendaServicoService {

  constructor(private httpClient: HttpClient) { }

  consultar(codigoVenda: any) {
    if (codigoVenda !== '') {
      codigoVenda = parseInt(codigoVenda, 10);
    }
    return this.httpClient.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar/" + codigoVenda);
  }

  incluir(venda: Venda) {
    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/incluir", venda);
  }

  excluir(venda: Venda) {
    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/remover", venda);
  }
}
