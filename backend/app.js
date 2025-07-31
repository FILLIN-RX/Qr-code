const express = require('express');
const cors = require('cors');
const qrRoutes = require('./routes/qrRoutes');
const userRoute = require('./routes/User')
const app = express();

app.use(cors());

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/api/qr', qrRoutes);
app.use('/api/useroute' ,userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
