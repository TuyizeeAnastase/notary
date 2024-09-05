import express from 'express'
import districtController from '../controllers/district.controllers'

const router=express();
router.get("/",districtController.getDistricts)

export default router;