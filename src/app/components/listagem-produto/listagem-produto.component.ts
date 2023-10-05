import { Component } from '@angular/core';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent {
  produtos: Produto[] = [];
}
