import { Cliente } from './cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteServicoService {

  constructor(private httpClient: HttpClient) { }

  consultar(nomeCliente: string) {
    return this.httpClient.get(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/consultar/"
      + nomeCliente);
  }

  incluir(cliente: Cliente) {
    return this.httpClient.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/incluir",
      cliente);
  }

  alterar(cliente: Cliente) {
    return this.httpClient.patch(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/alterarparcial",
      cliente);
  }

  remover(cliente: Cliente) {
    return this.httpClient.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/remover",
      cliente);
  }
}
