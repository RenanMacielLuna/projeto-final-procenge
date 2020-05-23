import { ClienteServicoService } from './../servico/cliente-servico.service';
import { Cliente } from './../servico/cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-manter',
  templateUrl: './cliente-manter.component.html',
  styleUrls: ['./cliente-manter.component.scss']
})
export class ClienteManterComponent implements OnInit {

  operacao: string = 'Incluir';
  nomeCliente: string = '';
  cliente: Cliente = new Cliente();
  constructor(
    private routeActivated: ActivatedRoute,
    private clienteServicoService: ClienteServicoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nomeCliente = this.routeActivated.snapshot.params.nome;
    if (this.nomeCliente != null) {
      this.operacao = 'Alterar';
      this.clienteServicoService.consultar(this.nomeCliente).subscribe(
        data => {
          this.cliente = (<Cliente[]>data)[0];
        }
      );
    }
  }

  incluir() {
    this.clienteServicoService.incluir(this.cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.voltar();
      }
    );

  }

  alterar() {
    this.clienteServicoService.alterar(this.cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.voltar();
      }
    );
  }

  voltar() {
    this.router.navigate(['/cliente']);
  }

}
