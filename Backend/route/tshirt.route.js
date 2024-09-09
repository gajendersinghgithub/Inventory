import express from "express";
import { getTshirt } from "../controller/tshirt.controller.js";

const router = express.Router();

router.get("/", getTshirt);

export default router;