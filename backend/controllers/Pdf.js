// controllers/qrControllerPdf.js
const QRCode = require("qrcode");
const path = require("path");

exports.generateQRFromPdf = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Aucun fichier PDF envoyé" });
    }

    console.log("PDF reçu :", req.file);

    // URL publique vers le PDF
    const pdfUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    // Génération du QR code avec l'URL du PDF
    const qrBuffer = await QRCode.toBuffer(pdfUrl);

    res.setHeader("Content-Type", "image/png");
    res.send(qrBuffer);

  } catch (err) {
    console.error("Erreur lors de la génération du QR Code :", err);
    res.status(500).json({ error: "Erreur serveur lors de la génération du QR code" });
  }
};
