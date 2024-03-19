import { Router } from "express";
// import {qrCode} from "../controllers/qr.controller.js";
import { createLabel } from "../controllers/label.controller.js";

const router = Router();

router.get("/label");
router.post("/createlabel", createLabel);

export default router;
