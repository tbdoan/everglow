import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
  res.send({ title: "Plamp Endpoint Documentation" });
});

export default router;
