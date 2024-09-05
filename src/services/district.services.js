import {District,Sector,Cell} from '../database/models'

export const getAllDistricts=async()=>{
    const districts=await District.findAndCountAll({
        include:[
            {
                model: Sector,
                as: 'sectors',
                include:[
                    {
                        model:Cell,
                        as:'cells'
                    }
                ]
            }
        ]
    })
    return districts;
}

export const getDistrictById=async(id)=>{
    return await District.findOne({
        where:{
            id:id
        }
    })
}