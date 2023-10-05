import { Component } from '@angular/core';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  produtos: Produto[] = [];
	novoProduto: Produto = new Produto('', 0, '', 0, '', '', false);

	cadastrarProduto() {
		console.log(this.produtos);
		this.produtos.push(this.novoProduto);
		this.novoProduto = new Produto('', 0, '', 0, '', '', false);
	}
}
