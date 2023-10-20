const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// asi deberian ser los endpoints, actualizar cuando termine las funciones de CRUD
// TODAS
router.get('/empresas', controller.getEmpresas);

// // Ruta por ID
// router.get('/empresas/:id', empresaController.getEmpresaById);

// // Create
//  router.post('/empresas', empresaController.createEmpresa);

// // Update
// router.put('/empresas/:id', empresaController.updateEmpresa);

// // Delete
// router.delete('/empresas/:id', empresaController.deleteEmpresa);

module.exports = router;
