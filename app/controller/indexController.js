import mongoose from "mongoose"
import model from "../models/traklab.js"

let Fetchid;
export const indexController= async (req,res)=>{
    try {
        const id=Fetchid
        res.render('index',{id:id})
    } catch (error) {
        res.status(500)
        .json(error)
    }
}
export const postController=(req,res)=>{
    try {
        const {name,email}=req.body
        const traklab=new model ({
            name:name,
            email:email
        })
        
    const result=traklab.save()
    let Fetchid=result._id
    // getID(Fetchid)

        // if(result){
        // return res.redirect('/traklabpost')
        // }
    } catch (error) {
        console.log(error)
    }
}

export const getIdController=async (req,res)=>{
    try {
        const { id } = req.body
        console.log(id)
        const getRecordByID= await model.findById({_id:id})

        console.log('Record',getRecordByID.name,getRecordByID.email)
        
        res.render('index', { getRecordByID: getRecordByID})
        

    } catch (error) {
        res.status(500)
        .json(error)
    }
}