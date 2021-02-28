import express from "express";
import plampRouter from "./routes/plamp/routes.js";
import userRouter from "./routes/user/routes.js";

const port = process.env.PORT || 8080;
const app = express();

app.use("/plamp", plampRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send({ msg: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
