import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true
  },
  complete:{
    type:Boolean,
    default:false
  },
  cteatedBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  }
}, { timestamps: true });

const Subtodo = mongoose.model('Subtodos', subTodoSchema);
