// controllers/qrControllerAudio.js
const QRCode = require("qrcode");
const path = require("path");

exports.generateQRFromAudio = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Aucun fichier audio envoyé frere" });
    }

    console.log("Audio reçu :", req.file);

    // URL publique vers l'audio
    const audioUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    // Génération du QR code avec l'URL de l'audio
    const qrBuffer = await QRCode.toBuffer(audioUrl);

    res.setHeader("Content-Type", "image/png");
    res.send(qrBuffer);

  } catch (err) {
    console.error("Erreur lors de la génération du QR Code audio :", err);
    res.status(500).json({ error: "Erreur serveur lors de la génération du QR code audio" });
  }
};
