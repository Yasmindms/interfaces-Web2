const produtos = {
  "esfirra de mussarela": {
    quant: 0,
    preco: 2.5,
  },
  "x-burguer": {
    quant: 0,
    preco: 25,
  },
  "esfirra de atum": {
    quant: 0,
    preco: 3.5,
  },
  "macarrão de legumes": {
    quant: 0,
    preco: 20,
  },
  "batata frita": {
    quant: 0,
    preco: 25,
  },
  "pizza calabresa com mussarela": {
    quant: 0,
    preco: 40,
  },
  "x-chicken": {
    quant: 0,
    preco: 35,
  },
  "x-chicken breast": {
    quant: 0,
    preco: 30,
  },
  "macarrão com queijo": {
    quant: 0,
    preco: 27,
  },
};
function addProduto(produto) {
  produtos[produto.toLowerCase()].quant += 1;
  alert("Voce adicionou um item ao carrinho");
}

function calcular() {
  let total = 0;

  for (const [key, value] of Object.entries(produtos)) {
    switch (key.toLowerCase()) {
      case "pizza calabresa com mussarela":
        value.preco *= 0.9; break; // 10% de desconto p/ unidade
      case "x-chicken breast":
        value.preco *= 0.8; break; // 20% de desconto p/ unidade
    }

    total += value.quant * value.preco;
  }
  document.getElementById("resultado-calculo").textContent = `Total: R$${total.toFixed(
    2,
  )}`;
  document.getElementById('texto').style.display='block';
}
