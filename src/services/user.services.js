import {User,Province,District,Sector,Cell} from '../database/models'

export const registerUser=async(user)=>{
    return await User.create(user)
};

export const getAllUsers=async()=>{
    const users=await User.findAndCountAll({
        include:[
            {
                model:Province,
                as:'province'
            },
            {
                model:District,
                as:'district'
            },
            // {
            //     model:Sector,
            //     as:'sector'
            // },
            {
                model:Cell,
                as:'cell'
            }
        ]
    })
    return users;
}

export const userUpdate=async(updated,user)=>{
    return await User.update(updated,{where:{id:user.id}})
}

export const getUserById=async(id)=>{
    return await User.findOne({
        where:{
            id:id
        }
    })
}