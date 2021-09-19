const app = require("./config/express")();
const port = 3000;
app.listen(port, function () {
  console.log("A API TA ON 🚀! porta:" + port);
});
