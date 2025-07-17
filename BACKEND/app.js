import express from 'express';
import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js';
import { sequelize } from './db.js';
import './models/index.js';
import 'colors'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors());

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
 

try {
  await sequelize.authenticate();
  console.log('Conectado a la BD.');
  await sequelize.sync();
} catch (error) {
  console.error('Error al conectar con la BD:', error);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`.rainbow.bgWhite);
});
