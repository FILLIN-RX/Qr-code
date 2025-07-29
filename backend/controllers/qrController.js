const QRCode = require('qrcode');

exports.generateQR = async (req, res) => {
  const { text, color = '#000000', background = '#ffffff' } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Texte requis pour générer un QR code.' });
  }

  try {
    const qrOptions = {
      color: {
        dark: color,
        light: background
      }
    };

    // Génère un buffer au lieu de base64
    const buffer = await QRCode.toBuffer(text, qrOptions);

    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', 'inline; filename="qrcode.png"');
    res.send(buffer);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la génération du QR code.', details: err.message });
  }
};
