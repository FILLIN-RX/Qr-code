// routes/qrRoutes.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const { generateQRImage } = require("../controllers/qrControllerImage");

const router = express.Router();

// Config multer (upload dossier "uploads")
const upload = multer({ dest: path.join(__dirname, "../uploads") });

// Route : POST /api/qr/generateFromImage
router.post("/generateFromImage", upload.single("image"), generateQRImage);

module.exports = router;
