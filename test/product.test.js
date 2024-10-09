import Product from "../src/model/product";
import sellProduct from "../src/service/sellProduct";

//A quantidade vendidade pode ser de 1 ou mais unidades
test("should validate stock and sell a unity", () => {
  let product = new Product("Celular", 500.0, 800.0, 20);
  sellProduct(product, 1);
  expect(product.stock).toBe(19);
});

test("deve aceitar a venda de mais de uma unidade", () => {
  let product = new Product("Celular", 500.0, 800.0, 20);
  sellProduct(product, 3);
  expect(product.stock).toBe(17);
});
