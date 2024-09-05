import { getAllServices } from "../services/service.services";

export class ServiceControllers{
    async getServices(req,res){
        try{
            const services=await getAllServices()
            return res.status(200).json({
                services
            })
        }catch(error){
            console.log(error)
            return res.status(500).json({
                message:'Error while fetching services'
            })
        }
    }
}

const serviceController=new ServiceControllers()
export default serviceController;