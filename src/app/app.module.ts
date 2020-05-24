import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteServicoService } from './cliente/servico/cliente-servico.service';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { HomeComponent } from './home/home.component';
import { VendaManterComponent } from './venda/venda-manter/venda-manter.component';
import { ProdutoManterComponent } from './produto/produto-manter/produto-manter.component';
import { ClienteManterComponent } from './cliente/cliente-manter/cliente-manter.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ClienteComponent,
    ProdutoComponent,
    VendaComponent,
    HomeComponent,
    VendaManterComponent,
    ProdutoManterComponent,
    ClienteManterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    ClienteServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
