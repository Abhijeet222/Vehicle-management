const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehicleNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  ownerName: {
    type: String,
    required: true
  },
  vehicleType: {
    type: String,
    required: true,
    enum: ['Car', 'Bike', 'Truck', 'Bus', 'Other']
  },
  insuranceExpiry: {
    type: Date,
    required: true
  },
  fitnessExpiry: {
    type: Date,
    required: true
  },
  permitExpiry: {
    type: Date,
    required: true
  },
  pollutionExpiry: {
    type: Date,
    required: true
  },
  taxExpiry: {
    type: Date,
    required: true
  },
  documentStatus: {
    type: String,
    enum: ['Active', 'Expired', 'Warning'],
    default: 'Active'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;