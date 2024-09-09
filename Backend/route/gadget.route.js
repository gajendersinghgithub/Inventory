import express from "express";
import {    getGadget   } from "../controller/gadget.controller.js";

const router = express.Router();

router.get("/", getGadget);

export default router;