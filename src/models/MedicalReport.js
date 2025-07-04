import mongoose from 'mongoose';

const MedicalReportSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reportName: {
    type: String,
    required: [true, 'Please provide a report name'],
    trim: true
  },
  reportType: {
    type: String,
    required: [true, 'Please provide a report type'],
    trim: true
  },
  filePath: {
    type: String,
    required: [true, 'Please provide a file path']
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

const MedicalReport = mongoose.model('MedicalReport', MedicalReportSchema);

export default MedicalReport;