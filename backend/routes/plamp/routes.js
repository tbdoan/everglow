import bodyParser from "body-parser";
import { Router } from "express";
import { addPlamp, addBatteryLevel, getPlamp } from "./functions.js";

const router = Router();
const jsonParser = bodyParser.json();

/**
 * Returns a JSON of endpoint documentation
 */
router.get("/", (req, res) => {
  res.send({ title: "Plamp Endpoint Documentation" });
});

/**
 * Adds a new plamp with a name
 */
router.post("/", jsonParser, (req, res) => {
  if (!req.body.user) {
    res.status(400).send({ error: "Missing User" });
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
    res.status(400).send({ error: "Missing batteryLevel" });
  } else if (
    typeof req.body.batteryLevel !== "number" ||
    req.body.batteryLevel < 0 ||
    req.body.batteryLevel > 100
  ) {
    res
      .status(400)
      .send({ error: "batteryLevel must be a valid number between 0 and 100" });
  } else {
    addBatteryLevel(req.params.id, req.body.batteryLevel, res);
  }
});

/**
 * Gets a plamp based on id
 */
router.get("/:id", (req, res) => {
  getPlamp(req.params.id, res);
});

export default router;
