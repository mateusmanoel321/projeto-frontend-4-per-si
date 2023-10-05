import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "src/app/produto-service.service";
import { Produto } from "src/app/produto.model";

@Component({
  selector: "app-listagem-produto",
  templateUrl: "./listagem-produto.component.html",
  styleUrls: ["./listagem-produto.component.css"],
})
export class ListagemProdutoComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos();
  }
}
