import { getAllCells } from "../services/cell.services";

export class CellsControllers{
    async getCells(req,res){
        try{
            const cells=await getAllCells()
            return res.status(200).json({
                cells
            })
        }catch(error){
            return res.status(500).json({
                message:'Error while fetching cells'
            })
        }
    }
}

const cellController=new CellsControllers()
export default cellController;