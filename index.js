const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const ineRoutes = require('./routes/ineRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/ine', ineRoutes);

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
