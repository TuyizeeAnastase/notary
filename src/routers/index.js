import express from 'express'


const routes=express()

routes.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome"
    })
})

routes.get("*", (req, res) => {
    res.status(404).json({
      message: "Page not found, try again",
    });
  });

export default routes;