import express from "express";
import routes from "./routes";
const app = express();
const port = 9000;

app.use("/", routes);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
