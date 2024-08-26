import {District} from '../database/models'

export const getAllDistricts=async()=>{
    const districts=await District.findAndCountAll([])
    return districts;
}

export const getDistrictById=async(id)=>{
    return await District.findOne({
        where:{
            id:id
        }
    })
}