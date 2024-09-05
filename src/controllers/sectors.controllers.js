import { getAllSectors } from "../services/sector.services";

export class SectorControllers{
    async getSectors(req,res){
        try{
            const sectors=await getAllSectors()
            return res.status(200).json({
                sectors
            })
        }catch(error){
            return res.tstus(500).json({
                message:'Error while fetching district'
            })
        }
    }
}

const sectorController=new SectorControllers()
export default sectorController;