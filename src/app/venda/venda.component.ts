import { Router } from '@angular/router';
import { ClienteServicoService } from './../cliente/servico/cliente-servico.service';
import { VendaServicoService } from './servico/venda-servico.service';
import { Cliente } from './../cliente/servico/cliente';
import { Venda } from './servico/venda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {

  readonly apiURL: string;
  public paginaAtual = 1;

  venda: Venda = new Venda();
  selecionado: Venda = new Venda();
  selecionadoCombobox: Cliente = new Cliente();

  listaVenda: Venda[] = [];'';
  listaCliente: Cliente[] = [];




  constructor(
    private router: Router,
    private vendaServicoService: VendaServicoService,
    private clienteServicoService: ClienteServicoService
  ) { }

  ngOnInit(): void {
    this.clienteServicoService.consultar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );

    let nomeCliente = '';
    let codigoVenda: number = null;

    this.vendaServicoService.consultar('').subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
      }
    );
  }

  pesquisar() {

    console.log(this.selecionado.codigo);
    this.vendaServicoService.consultar(this.selecionadoCombobox.codigo).subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
      }
    );
  }

  incluir() {
    this.router.navigate(['/venda/incluir']);
  }

  alterar() {
    this.router.navigate(['/venda/alterar/' + this.selecionado.codigo]);
  }

  remover() {
    this.vendaServicoService.excluir(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  selecionar(venda) {
    console.log(venda);
    this.selecionado = venda;
  }

}
