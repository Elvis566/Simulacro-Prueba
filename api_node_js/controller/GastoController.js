import { GastoModel} from '../model/GastoModel.js';

export const getGastos = async (req, res) =>{
    const gasto = await GastoModel.findAll();
    res.status(200).json({'gastos' : gasto})
}

export const crateGastos = async (req, res)=>{
    let gasto;
    try {
     const {descricion, monto, fechaT, categoria_id} = req.body
     if(!descricion || !monto || !fechaT || !categoria_id){
         res.status(401).json({'message' : 'No se permiten campos vacios'})
     }else{
        if(monto > 0){
             gasto = await GastoModel.create({
                description: descricion,
                monto: monto,
                fechaT: fechaT,
                categoria_id: categoria_id
             });
        }else{
            res.status(401).json({'message' : 'El costo no puede ser negativo'})
        }

         res.status(201).json({'message':'create sucessfull', "gastos": gasto})
     }
    } catch (error) {
     res.status(500).json({message : error.message})
    }
}

export const busqueda = async (req, res) =>{
    const {fechaB} = req.body;
    if(!fechaB){
        res.status(201).json({'message' : 'Ingrese una fecha valida'})
    }
    const gasto = await GastoModel.Where('fechaT', fechaB);
    res.status(200).json({'gastos' : gasto})
}

