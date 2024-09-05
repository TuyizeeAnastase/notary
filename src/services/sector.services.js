import {Sector,Cell} from '../database/models'

export const getAllSectors=async()=>{
    const sectors=await Sector.findAndCountAll({
        include:[
            {
              model:Cell,
              as:'cells'
            }
        ]
    })
    return sectors;
}

export const getSectorsById=async(id)=>{
    return await Sector.findOne({
        where:{
            id:id
        }
    })
}