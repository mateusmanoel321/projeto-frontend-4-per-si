import { Injectable } from '@angular/core';
import { Produto } from './produto.model';

@Injectable({
	providedIn: 'root'
})
export class ProdutoService {
	private produtos: Produto[] = [];

	adicionarProduto(produto: Produto) {
		this.produtos.push(produto);
	}

	getProdutos(): Produto[] {
		return this.produtos;
	}
}
