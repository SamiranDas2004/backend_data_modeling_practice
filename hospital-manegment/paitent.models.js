import mongoose, { mongo } from 'mongoose'

const paitentSchema= new mongoose.Schema({
  name:{
    required:true,
    type:String
  },
  diagnosedWith:{
    type: String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  bloodGroup:{
    type:String,
    required:true
  },
  gender:{
    enum:['M','F',"O"],
    type:String,
    required:true
  },
  admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Hospital'
  }



},{timestamps:true})

export const Paitent=mongoose.model('Paitent',paitentSchema)