import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ ok: true });
});

app.listen(3001, () => console.log("listenning..."));
