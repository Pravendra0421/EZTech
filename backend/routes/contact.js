import express from "express";
import { contactPage } from "../controller/contact.js";
const router = express.Router();
router.route("/contact").post(contactPage);
export default router;