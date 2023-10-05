export class Produto {
	constructor(
		public nome: string,
		public preco: number,
		public descricao: string,
		public quantidadeEstoque: number,
		public unidadeMedida: string,
		public fornecedor: string,
		public ativo: boolean
	) {}
}