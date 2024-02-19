import { CategoriaModel } from '../model/CategoriaModel.js';

export const getCategoria = async (req, res) =>{
    const categorias = await CategoriaModel.findAll();
    res.status(200).json({'categorias': categorias});
}