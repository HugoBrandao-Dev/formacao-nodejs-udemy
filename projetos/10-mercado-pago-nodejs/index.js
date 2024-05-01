const express = require("express");
const MercadoPago = require("mercadopago");
const app = express();

// Configurações do Mergado Pago
MercadoPago.configure({
  sandbox: true,
  access_token: "TEST-7943166175196536-042913-07cc4f2d43427b8939a8520cbcced7a2-1080033273"
});

// Gera uma hash random com a quantidade de caracteres informado.
function genID(_length) {
  return [...Array(_length)].map(() => Math.floor(Math.random() * _length).toString(_length)).join("");
};

app.get("/", (req, res) => {
  res.send("Olá mundo!!");
});

app.get("/pagar", async (req, res) => {

  const id = genID(24).toString();
  const emailPayer = "tobias@gmail.com";

  const products = [
    {
      id: genID(24),
      name: "Bloodborn",
      quantity: 1,
      price: 150.50
    },
    {
      id: genID(24),
      name: "Elden Ring",
      quantity: 1,
      price: 350.55
    },
    {
      id: genID(24),
      name: "Dark Souls",
      quantity: 2,
      price: 100.9
    }
  ];

  // Junta os produtos e suas quantidades em uma mesma string.
  const title = products.map(product => `${ product.quantity }x ${ product.name }`).join("; ");

  // Cálcula o total a ser pago.
  const amount = products.map(product => product.quantity * product.price).reduce((a, b) => a + b);;

  // Explicação breve da estrutura
  /*
    A API do Mercado Pago aprensenta problemas nos nomes do identificadores, criando problemas na 
    hora de identificar o que eles realmente fazem.
    {
      id: "[ID PARA A COMPRA, DEVENDO SER ÚNICO (usar uuid)]",
      title: "[DESCRIÇÃO QUE SERÁ MOSTRADA PARA O USUÁRIO]",
      quantity: [QUANTIDADE DE COMPRA (não de produtos) | GERALMENTE 1],
      currency_id: "[MOEDA QUE SERÁ UTILIZADA]",
      unit_price: [VALOR TOTAL DA COMPRA (não de cada produto)]
    }

    A propriedade payer pode levar mais informações.

    O [ID PARA A COMPRA], que vai de id, em items, e no external_reference, e o email do cliente dentro de payer, são as informações que podem ser armazenadas no BD.
  */
  const data = {
    items: [
      {
        id, // Será usado quando o pagamento for concluído.
        title,
        quantity: 1,
        currency_id: "BRL",
        unit_price: amount
      }
    ],
    payer: {
      email: emailPayer
    },
    external_reference: id // Será usado quando o pagamento for concluído.
  };

  try {
    const payment = await MercadoPago.preferences.create(data);
    console.log(payment); // Dá para ver informações adicionais, inclusive a estrutura do payer.
    return res.redirect(payment.body.init_point); // init_point é a URL de checkout.
  } catch (err) {
    return err
  }

});

app.listen(3000, (req, res) => {
  console.log("Servidor rodando");
});