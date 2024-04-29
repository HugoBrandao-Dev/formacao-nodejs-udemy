const express = require("express");
const MercadoPago = require("mercadopago");
const app = express();

// Configurações do Mergado Pago
MercadoPago.configure({
  sandbox: true,
  access_token: "TEST-7943166175196536-042913-07cc4f2d43427b8939a8520cbcced7a2-1080033273"
});

app.get("/", (req, res) => {
  res.send("Olá mundo!!");
});

app.listen(3000, (req, res) => {
  console.log("Servidor rodando");
});