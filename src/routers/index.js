import express from 'express'
import userRouter from './user.routers'


const routes=express()

routes.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome"
    })
})

routes.use("/api/v1/users",userRouter)

routes.get("*", (req, res) => {
    res.status(404).json({
      message: "Page not found, try again",
    });
  });

export default routes;