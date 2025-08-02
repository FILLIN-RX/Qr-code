// controllers/qrControllerVideo.js
const QRCode = require("qrcode");
const path = require("path");

exports.generateQRFromVideo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Aucune vidéo envoyée" });
    }

    console.log("Vidéo reçue :", req.file);

    // URL publique vers la vidéo
    const videoUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    // Génération du QR code avec l'URL de la vidéo
    const qrBuffer = await QRCode.toBuffer(videoUrl);

    res.setHeader("Content-Type", "image/png");
    res.send(qrBuffer);

  } catch (err) {
    console.error("Erreur lors de la génération du QR Code vidéo :", err);
    res.status(500).json({ error: "Erreur serveur lors de la génération du QR code vidéo" });
  }
};
