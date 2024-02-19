import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// modulos importados desde el proyecto 
import { sequelize  } from './DB/conexion.js';
import { gastoRouter} from './router/GastoRouter.js';
import { categoriaRouter} from './router/CategoriaRouter.js';
import { PORT } from './config/config.js';

const app = express()
const port =    PORT;

app.use(cors());
app.use(bodyParser.json()) // para que se puedan recibir datos en formato JSON
app.use(bodyParser.urlencoded({ extended: false })) // para que se puedan enviar
app.use('/api', gastoRouter);
app.use('/api', categoriaRouter)

const conexion= async () =>{
    try {
      await sequelize.authenticate();
      await sequelize.sync({ force: false });
      console.log('Connection has been established successfully.');
      app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`)
      })
  } catch (error) {
      console.error(`Error ${error}`);
  }
}

conexion()