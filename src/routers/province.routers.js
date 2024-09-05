import express from 'express'
import provinceController from '../controllers/province.controllers'


const router=express();
router.get("/",provinceController.getProvinces)

export default router;