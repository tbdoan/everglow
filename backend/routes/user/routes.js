import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
  res.send({ title: "User Endpoint Documentation" });
});

export default router;
