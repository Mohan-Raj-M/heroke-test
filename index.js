const express = require("express");
const bodyParser = require("body-parser");

var PORT=process.env.PORT||5000

const app = express();

app.use(express.json());
app.use(bodyParser.json());




// app.get("/",requireAuth, (req, res) => {
//   res.send(`Your email:${req.user.email}`);
// });

app.get("/", (req, res) => {
  console.log("succesfully launced")
});

app.listen(PORT, () => {
  console.log("App running on port 5000");
});
