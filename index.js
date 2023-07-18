import dotenv from "dotenv";
dotenv.config();
import express from "express";
import messages from "./db.js";
const app = express();

app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/page-a", (req, res) => {
  res.render("page-a", { messages: messages });
});

app.get("/page-b", (req, res) => {
  res.render("page-b");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
