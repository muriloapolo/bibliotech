import express from "express";
// import bodyParser from "express";
const app = express();
// app.use(bodyParser)

//Listando arquivos
app.get("/", (req, res) => {
  res.send("Hello World");
});
//Listando Por ID
app.get("/details/:id", (req, res) => {
    res.send(`Detalhes from ${req.params.id}`);
  });
//Alterando arquivos
app.put("/", (req, res) => {
  res.send("Alterando arquivos na Raiz.");
});
//Adicionando arquivos
app.post("/", (req, res) => {
  res.send("Adicionando arquivos na Raiz.");
});
//Deletando arquivos
app.delete("/", (req, res) => {
  res.send("Deletando arquivos na Raiz.");
});

export default app;
