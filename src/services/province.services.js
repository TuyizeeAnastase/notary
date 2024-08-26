import {Province} from '../database/models'

export const getAllProvinces=async()=>{
    const provinces=await Province.findAndCountAll([])
    return provinces;
}

export const getProvinceById=async(id)=>{
    return await Province.findOne({
        where:{
            id:id
        }
    })
}

 