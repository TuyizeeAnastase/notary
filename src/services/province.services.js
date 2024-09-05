import {Province,District,Sector,Cell} from '../database/models'

export const getAllProvinces=async()=>{
    const provinces=await Province.findAndCountAll({
        include:[
            {
                model:District,
                as:'districts',
                include: [
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
            },
        ]
    })
    return provinces;
}

export const getProvinceById=async(id)=>{
    return await Province.findOne({
        where:{
            id:id
        }
    })
}

 