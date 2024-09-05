import express from 'express'
import bookingController from '../controllers/booking.controllers'


const router=express()
router.post("/",bookingController.book)

export default router;
