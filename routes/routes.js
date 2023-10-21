const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// TODAS
router.get('/empresas', controller.getEmpresas);

// Ruta por ID
router.get('/empresas/:id', controller.getEmpresaById);

// Create
router.post('/empresas', controller.createEmpresa);

// Update
router.put('/empresas/:id', controller.updateEmpresa);

// Delete
router.delete('/empresas/:id', controller.deleteEmpresa);

module.exports = router;
