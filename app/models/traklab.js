import mongoose from "mongoose"
const traklab_schema=mongoose.Schema
const trakmodel =new traklab_schema({
    name  :{type:String , required:true},
    email :{type:String , unique:true, required:true}
})

const traklab=mongoose.model('Traklab',trakmodel);
export default traklab