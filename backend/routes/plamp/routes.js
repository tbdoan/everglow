import bodyParser from "body-parser";
import { Router } from "express";
import { addPlamp, addBatteryLevel, getPlamp } from "./functions.js";

const router = Router();
const jsonParser = bodyParser.json();

router.get("/", (req, res) => {
  res.send({ title: "Plamp Endpoint Documentation" });
});

/**
 * Adds a new plamp with a name
 */
router.post("/", jsonParser, (req, res) => {
  if (!req.body.user) {
    res.status(400).send({ error: "Missing Username" });
  } else if (!req.body.name) {
    res.status(400).send({ error: "Missing Name" });
  } else {
    addPlamp(req.body.user, req.body.name, res);
  }
});

/**
 * Appends a new battery level to history
 */
router.put("/:id", jsonParser, (req, res) => {
  if (!req.body.batteryLevel) {
    res.status(400).send({ error: "Missing Battery Level" });
  }
  addBatteryLevel(req.params.id, req.body.batteryLevel, res);
});

/**
 * Gets a plamp based on id
 */
router.get("/:id", (req, res) => {
  getPlamp(req.params.id, res);
});

export default router;
