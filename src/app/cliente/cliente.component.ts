import { ClienteServicoService } from './servico/cliente-servico.service';
import { Cliente } from './servico/cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  listaCliente: Cliente[] = [];                 //Lista que recebe o retorno do serviço
  listaTotalClientes: Cliente[] = [];           // Lista para popular o combobox depois da primeira seleção;
  listaClienteTabela: Cliente[] = [];           // Lista para popular a tabela de clientes
  selecionado: Cliente = new Cliente();         // Selecionado pelo radio button
  selecionadoCombobox: Cliente = new Cliente(); // Selecionado pelo combobox

  constructor(
    private router: Router,
    private clienteServicoService: ClienteServicoService
  ) { }

  ngOnInit(): void {
    this.clienteServicoService.consultar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
        this.listaTotalClientes = <Cliente[]>data;
        this.listaClienteTabela = <Cliente[]>data;
      }
    );
  }


  selecionar(cliente: Cliente) {
    this.selecionado = cliente;
  }

  pesquisar() {
    this.clienteServicoService.consultar(this.selecionadoCombobox.nome).subscribe(
      (data) => {
        this.listaCliente = (<Cliente[]>data);
        let cliente = this.listaCliente[0];
        this.listaClienteTabela = [];
        this.listaClienteTabela.push(cliente);
      }
    );
  }

  incluir() {
    this.router.navigate(['cliente/incluir']);
  }

  alterar() {
    this.router.navigate([`cliente/alterar/${this.selecionado.nome}`]);
  }

  excluir() {
    this.clienteServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

}
