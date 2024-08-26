import {Sector} from '../database/models'

export const getAllSectors=async()=>{
    const sectors=await Sector.findAndCountAll([])
    return sectors;
}

export const getSectorsById=async(id)=>{
    return await Sector.findOne({
        where:{
            id:id
        }
    })
}