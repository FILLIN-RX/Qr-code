// controllers/qrControllerTypes.js
const QRCode = require("qrcode");

exports.generateQRFromText = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Le texte est requis" });
    }

    const qrBuffer = await QRCode.toBuffer(text);

    res.setHeader("Content-Type", "image/png");
    res.send(qrBuffer);
  } catch (err) {
    console.error("Erreur QR texte :", err);
    res
      .status(500)
      .json({ error: "Erreur lors de la génération du QR code texte" });
  }
};

exports.generateQRFromUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "L'URL est requise" });
    }

    const qrBuffer = await QRCode.toBuffer(url);

    res.setHeader("Content-Type", "image/png");
    res.send(qrBuffer);
  } catch (err) {
    console.error("Erreur QR URL :", err);
    res
      .status(500)
      .json({ error: "Erreur lors de la génération du QR code URL" });
  }
};

exports.generateQRFromEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "L'email est requis" });
    }

    const mailto = `mailto:${email}`;
    const qrBuffer = await QRCode.toBuffer(mailto);

    res.setHeader("Content-Type", "image/png");
    res.send(qrBuffer);
  } catch (err) {
    console.error("Erreur QR Email :", err);
    res
      .status(500)
      .json({ error: "Erreur lors de la génération du QR code Email" });
  }
};

exports.generateQRFromVCard = async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    if (!name || !phone || !email) {
      return res
        .status(400)
        .json({ error: "Nom, téléphone et email sont requis" });
    }

    // Format vCard
    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
EMAIL:${email}
END:VCARD
    `.trim();

    const qrBuffer = await QRCode.toBuffer(vCard);

    res.setHeader("Content-Type", "image/png");
    res.send(qrBuffer);
  } catch (err) {
    console.error("Erreur QR vCard :", err);
    res
      .status(500)
      .json({ error: "Erreur lors de la génération du QR code vCard" });
  }
};
