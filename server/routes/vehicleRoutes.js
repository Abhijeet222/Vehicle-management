const express = require('express');
const vehicleRoutes = express.Router();

const vehicleController = require('../controllers/vehicleController');
const {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle
} = require('../controllers/vehicleController');

const authMiddleware = require('../middleware/authMiddleware');

// Routes
router.get('/', authMiddleware, vehicleController.getAllVehicles); // Get all
router.get('/:id', authMiddleware, vehicleController.getVehicleById); // Get one
router.post('/', authMiddleware, vehicleController.createVehicle); // Create
router.put('/:id', authMiddleware, vehicleController.updateVehicle); // Update
router.delete('/:id', authMiddleware, vehicleController.deleteVehicle); // Delete

module.exports = vehicleRoutes;
