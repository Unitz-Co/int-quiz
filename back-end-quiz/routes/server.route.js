import express from "express";
const router = express.Router();
import * as serverController from "../controllers/server.controller.js";

// GetData Route

router.get("/getAdvisors", serverController.getDataAdvisors);

export default router;
