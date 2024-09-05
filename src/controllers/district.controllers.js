import { getAllDistricts } from "../services/district.services";

export class DistrictControllers{
    async getDistricts(req,res){
        try{
            const districts=await getAllDistricts()
            return res.status(200).json(
                {
                    districts
                }
            )
        }catch(error){
            console.log(error)
            return res.status(500).json({
                message:'Error while fetching district'
            })
        }
    }
}


const districtController=new DistrictControllers()
export default districtController;