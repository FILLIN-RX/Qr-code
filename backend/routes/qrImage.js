const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const QRCode = require("qrcode");

const { generateQRImage } = require("../controllers/qrControllerImage");

router.post("/generateFromImage", generateQRImage);
