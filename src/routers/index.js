import express from 'express'
import userRouter from './user.routers'
import provinceRouter from './province.routers'
import districtRouter from './district.routers'
import sectorRouter from './sector.routers'
import cellRouter from './cell.routers'
import serviceRouter from './service.routers'
import bookingrouter from './book.routers'

const routes=express()

routes.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome"
    })
})

routes.use("/api/v1/users",userRouter)
routes.use("/api/v1/provinces",provinceRouter)
routes.use("/api/v1/districts",districtRouter)
routes.use("/api/v1/sectors",sectorRouter)
routes.use("/api/v1/cells",cellRouter)
routes.use("/api/v1/services",serviceRouter)
routes.use("/api/v1/book",bookingrouter)

routes.get("*", (req, res) => {
    res.status(404).json({
      message: "Page not found, try again",
    });
  });

export default routes;