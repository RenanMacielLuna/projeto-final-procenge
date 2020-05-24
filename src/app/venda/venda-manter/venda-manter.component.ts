import { ProdutoServicoService } from './../../produto/servico/produto-servico.service';
import { ClienteServicoService } from './../../cliente/servico/cliente-servico.service';
import { VendaServicoService } from './../servico/venda-servico.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from './../../cliente/servico/cliente';
import { Produto } from './../../produto/servico/produto';
import { VendaItem } from './../servico/vendaitem';
import { Venda } from './../servico/venda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venda-manter',
  templateUrl: './venda-manter.component.html',
  styleUrls: ['./venda-manter.component.scss']
})
export class VendaManterComponent implements OnInit {

  operacao: string = 'Incluir';
  venda: Venda = new Venda();
  vendaItem: VendaItem = new VendaItem();
  listaProduto: Produto[] = [];
  listaCliente: Cliente[] = [];

  constructor(
    private routeActivated: ActivatedRoute,
    private router: Router,
    private vendaServicoService: VendaServicoService,
    private clienteServicoService: ClienteServicoService,
    private produtoServicoService: ProdutoServicoService
  ) { }

  ngOnInit(): void {
    const codigoVenda = this.routeActivated.snapshot.params.codigo;

    this.vendaServicoService.consultar(codigoVenda).subscribe(
      (data: Venda) => {
        this.venda = data[0];
      }
    )

    this.clienteServicoService.consultar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );

    this.produtoServicoService.consultar('').subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
      }
    );
  }

  voltar() {
    this.router.navigate(['/venda']);
  }

  incluir() {
    this.vendaServicoService.incluir(this.venda).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/matricula']);
      }
    );
  }

  adicionar() {
    this.venda.listaVendaItem.push(this.vendaItem);
    this.vendaItem = new VendaItem();
  }

  removerItem(vendaItem: VendaItem) {
    this.venda.listaVendaItem = this.venda.listaVendaItem.filter(obj => obj !== vendaItem);
  }

}
