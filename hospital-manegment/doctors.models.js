import mongoose from 'mongoose';

const doctorsSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  salary:{
    type:String,
    required:true
  },
  qualification:{
    type:String,
    required:true
  },
  experienceInyears:{
    type:String,
    default:0
  },
  worksInHospitals:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Hospital'
    },
  ]
},{timestamps:true})

export const Doctors=mongoose.model('Doctors',doctorsSchema)