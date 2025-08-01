const express = require("express");
const multer = require("multer");
const path = require("path");


const {
  generateQRFromText,
  generateQRFromUrl,
  generateQRFromEmail,
  generateQRFromVCard
} = require("../controllers/QrTypes");

const router = express.Router();
const upload = multer({ dest: path.join(__dirname, "../uploads") });

// Image


// PDF


// Texte
router.post("/generateFromText", generateQRFromText);

// URL
router.post("/generateFromUrl", generateQRFromUrl);

// Email
router.post("/generateFromEmail", generateQRFromEmail);

// vCard
router.post("/generateFromVCard", generateQRFromVCard);

module.exports = router;
