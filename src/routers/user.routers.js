import express from 'express'
import userController from '../controllers/user.controllers'
import { checkUserExists } from '../middleware/user.middleware';
import { userValidation } from '../validations/user.validations';

const router=express();

router.get("/",userController.getUsers)
router.post("/register",userValidation,checkUserExists,userController.createUser)

export default router;