// Install: npm install express multer qrcode
const express = require("express");
const multer = require("multer");
const path = require("path");
const QRCode = require("qrcode");

const app = express();
const upload = multer({ dest: "uploads/" });

exports.generateQRImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Aucune image envoyée" });
    }

    console.log("Fichier reçu :", req.file);

    const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
    const qrBuffer = await QRCode.toBuffer(imageUrl);

    res.setHeader("Content-Type", "image/png");
    res.send(qrBuffer);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de la génération du QR code" });
  }
};


// Servir le dossier uploads en public



