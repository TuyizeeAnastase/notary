import {Cell} from '../database/models'

export const getAllCells=async()=>{
    const cells=await Cell.findAndCountAll({})
    return cells
}

export const getCellsById=async(id)=>{
    return await Cell.findOne({
        where:{
            id:id
        }
    })
}