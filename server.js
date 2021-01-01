import express from 'express'
import dotenv from "dotenv"
import mongoose from "mongoose"
import InitRoutes from "./route/web.js"
import path from "path"
const app=express()
const port =process.env.PORT || 3000
const __dirname = path.resolve();
dotenv.config();




mongoose.connect(process.env.mongo_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true
  })
  const connection = mongoose.connection;
  connection.once('open', ()=>{
    console.log('Database connected')
  }).catch(err =>{
    console.log("connection field"+err)
  })


app.use(express.static('public')) 
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('views',path.join(__dirname , '/resource/view'))
app.set('view engine' , 'ejs')


  InitRoutes(app)

app.listen(port, ()=>{
    console.log(`server runing on localhost//${port}`)
})