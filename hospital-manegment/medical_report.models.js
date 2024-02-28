import mongoose, { mongo } from 'mongoose';

const medicalRecordlSchema = new mongoose.Schema({}, { timestamps: true });

export const MedicalReport = mongoose.model(
  'Medicalrecord',
  medicalRecordlSchema
);
