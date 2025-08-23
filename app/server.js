import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/healthz", (_req, res) => res.status(200).send("ok"));
app.get("/", (_req, res) => res.json({ ok: true, service: "hello-eks" }));
app.get("/hello", (_req, res) => res.send("hello from EKS"));
app.get("/time", (_req, res) => res.json({ now: new Date().toISOString() }));

// exemplo com variável de ambiente do ConfigMap
app.get("/env", (_req, res) =>
  res.json({
    appName: process.env.APP_NAME || "unknown",
    version: process.env.VERSION || "dev"
  })
);

app.listen(port, () => {
  // log simples
  console.log(`listening on :${port}`);
});
