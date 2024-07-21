import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'
import morgan from 'morgan'
import routes from './routers'
import dotenv from 'dotenv';

dotenv.config();

const app=express()


const PORT=process.env.PORT 

app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(morgan("tiny"));
app.use(cors());
app.use(routes)

const server=app.listen(PORT,console.log(`Server listening on ${PORT}`));

process.on("unhandledRejection",(err,promise)=>{
    server.close(()=>process.exit(1));
});

export default app;