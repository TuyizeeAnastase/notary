import {User} from '../database/models'

export const checkUserExists=async(req,res,next)=>{
    const {nid}=req.body;
    const user=await User.findAll({
        where:{
            nid:nid
        },
    });
    if(user.length>0){
        res.status(400).json({
            message:"User with that ID is already registered"
        });
        return false;
    }
    next();
}
