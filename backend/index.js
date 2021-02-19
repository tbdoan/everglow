import express from "express";
import plamp_router from "./routes/plamp/routes.js";
import user_router from "./routes/user/routes.js";

const port = 8080;
const app = express();
app.use("/plamp", plamp_router);
app.use("/user", user_router);

app.get("/", (req, res) => {
  res.send({ msg: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
