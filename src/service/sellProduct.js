/**
 * A quantidade vendidade pode ser de 1 ou mais unidades
 * --> Se estoque ficar negativo um exception deve ser lançado
 * --> Valor de venda não pode ser menor que o valor de compra
 * @param {*} product
 * @param {*} amount
 */

export default function sellProduct(product, amount) {
  product.stock -= amount;
  return product;
}
