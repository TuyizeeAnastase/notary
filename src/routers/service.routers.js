import express from 'express'
import serviceController from '../controllers/services.controllers'

const router=express();
router.get("/",serviceController.getServices)

export default router;