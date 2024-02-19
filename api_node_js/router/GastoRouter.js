import { getGastos, crateGastos, busqueda} from "../controller/GastoController.js";
import { Router } from 'express';

const router = Router();

// rutas establecidas para mis apis del modelo gasto
router.get('/getRegistro', getGastos);
router.post('/addRegistro', crateGastos);
router.get('/getBusqueda', busqueda);
export const gastoRouter = router;