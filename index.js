const app = require("./config/express")();

//* Arquivo de requisições está apontando para a porta 3000.
const port = 3000;
app.listen(port, function () {
  console.log("A API TA ON 🚀! porta:" + port);
});
