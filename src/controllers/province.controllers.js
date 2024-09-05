import { getAllProvinces } from "../services/province.services";

export class ProvinceControllers{
    async getProvinces(req,res){
        try{
            const provinces=await getAllProvinces()
            return res.status(200).json({
                provinces,
            })
        }catch(error){
            return res.status(500).json({
                messsage:'Error while fetching provinces'
            })
        }
    }
}

const provinceController=new ProvinceControllers()
export default provinceController;