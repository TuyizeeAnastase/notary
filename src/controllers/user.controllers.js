import { registerUser,getAllUsers,userUpdate,getUserById } from "../services/user.services";

export class userControllers{
    async createUser(req,res){
        try{
            const newUSer={
               name:req.body.name,
               nid:req.body.id,
               telephone:req.body.telephone,
               email:req.body.email,
               residence:req.body.residence,
               provinceId:req.body.provinceId,
               districtId:req.body.districtId,
               sectorId:req.body.sectorId,
               cellId:req.body.cellId 
            }
            const user=await registerUser(newUSer)
            return res.status(201).json({
                message:'User created successfuly',
                user,
            })
        }catch(error){
            return res.status(500).json({
               message:'Unable to register user',
               error:error.message
            })
        }
    }

    async getUsers(req,res){
        try{
            const users=await getAllUsers()
            return res.status(200).json({
                users,
            })
        }catch(error){
            return res.status(500).json({
                message:"Error while fetching the data",
                error:error.message
            })
        }
    }

}

const userController=new userControllers()
export default userController;