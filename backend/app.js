const express = require('express');
const cors = require('cors');
const qrRoutes = require('./routes/qrRoutes');
const userRoute = require('./routes/User')
const ImageRoutes = require('./routes/qrImage');
const PdfRoutes = require('./routes/pdfRoutes');
const QrRoutes = require('./routes/pdfroute')
const app = express();

app.use(cors());

app.use(express.json());
app.use('/api',QrRoutes)
app.use('/api/qr', qrRoutes);
app.use('/api/useroute' ,userRoute);
app.use('/api/qrImage', ImageRoutes);
app.use('/api/pdfQr',PdfRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
