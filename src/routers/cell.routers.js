import express from 'express'
import cellController from '../controllers/cell.controllers'

const router=express();
router.get("/",cellController.getCells)

export default router;