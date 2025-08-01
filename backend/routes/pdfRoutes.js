const express = require("express");
const multer = require("multer");
const path = require("path");
const { generateQRFromPdf } = require("../controllers/Pdf");

const router = express.Router();

// Multer config
const upload = multer({ dest: path.join(__dirname, "../uploads") });

// Route : POST /api/qr/generateFromPdf
router.post("/generateFromPdf", upload.single("pdf"), generateQRFromPdf);

module.exports = router;
