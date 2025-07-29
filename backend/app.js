const express = require('express');
const cors = require('cors');
const qrRoutes = require('./routes/qrRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/qr', qrRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
