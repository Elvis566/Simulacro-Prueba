import { getCategoria } from '../controller/CategoriasController.js';
import { Router } from 'express';

const router = Router();

// definimos rutas para ewl modelo de categorias 
router.get('/getCateogorias', getCategoria);

export const categoriaRouter = router;