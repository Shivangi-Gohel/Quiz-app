import express from "express";
import cors from "cors";
import { Javascript } from "./jsQuiz.js";
import { nodejsQuiz } from "./nodejsQuiz.js";
import { reactQuiz } from "./reactQuiz.js";
import { htmlQuiz } from "./htmlQuiz.js";
import { cssQuiz } from "./cssQuiz.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/quiz/js", (req, res) => {
  res.json(Javascript);
});

app.get("/quiz/html", (req, res) => {
  res.json(htmlQuiz);
});

app.get("/quiz/node", (req, res) => {
  res.json(nodejsQuiz);
});

app.get("/quiz/css", (req, res) => {
  res.json(cssQuiz);
});

app.get("/quiz/react", (req, res) => {
  res.json(reactQuiz);
});

const PORT = 5000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
