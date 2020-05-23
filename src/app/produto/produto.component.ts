import { Router } from '@angular/router';
import { ProdutoServicoService } from './servico/produto-servico.service';
import { Produto } from './servico/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  listaProduto: Produto[] = [];                    //Lista que recebe o retorno do serviço
  listaTotalProdutos: Produto[] = [];              // Lista para popular o combobox depois da primeira seleção;
  listaProdutoTabela: Produto[] = [];              // Lista para popular a tabela de clientes
  selecionado: Produto = new Produto();             // Selecionado pelo radio button
  selecionadoCombobox: Produto = new Produto();    // Selecionado pelo combobox

  constructor(
    private router: Router,
    private produtoServicoService: ProdutoServicoService
  ) { }

  ngOnInit(): void {
    this.produtoServicoService.consultar('').subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
        this.listaTotalProdutos = <Produto[]>data;
        this.listaProdutoTabela = <Produto[]>data;
      }
    )
  }

  selecionar(produto: Produto) {
    this.selecionado = produto;
  }

  pesquisar() {
    this.produtoServicoService.consultar(this.selecionadoCombobox.nome).subscribe(
      data => {
        this.listaProduto = (<Produto[]>data);
        let produto = this.listaProduto[0];
        this.listaProdutoTabela = [];
        this.listaProdutoTabela.push(produto);
      }
    );
  }

  incluir() {
    this.router.navigate(['produto/incluir']);
  }

  alterar() {
    this.router.navigate([`produto/alterar/${this.selecionado.nome}`])
  }

  excluir() {
    this.produtoServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    )
  }

}
