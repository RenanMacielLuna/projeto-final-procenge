import { ProdutoServicoService } from './../servico/produto-servico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from './../servico/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-manter',
  templateUrl: './produto-manter.component.html',
  styleUrls: ['./produto-manter.component.scss']
})
export class ProdutoManterComponent implements OnInit {

  operacao: string = 'Incluir';
  nomeProduto: string = '';
  produto: Produto = new Produto();

  constructor(
    private routeActivated: ActivatedRoute,
    private produtoServicoService: ProdutoServicoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nomeProduto = this.routeActivated.snapshot.params.nome;
    if (this.nomeProduto != null) {
      this.operacao = 'Alterar';
      this.produtoServicoService.consultar(this.nomeProduto).subscribe(
        data => {
          this.produto = (<Produto[]>data)[0];
        }
      );
    }
  }

  incluir() {
    this.produtoServicoService.incluir(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.voltar();
      }
    );
  }

  alterar() {
    this.produtoServicoService.alterar(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.voltar();
      }
    );
  }

  voltar() {
    this.router.navigate(['/produto']);
  }

}
