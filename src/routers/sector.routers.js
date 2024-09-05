import express from 'express'
import sectorsControllers from '../controllers/sectors.controllers'

const router=express();
router.get("/",sectorsControllers.getSectors)

export default router;