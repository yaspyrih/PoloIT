const Empresa = require('../models/model');

const controller = {
  getEmpresas: async (req, res) => {
    try {
      const empresas = await Empresa.find();
      console.log(empresas)
      res.json(empresas);
    } catch (error) {
      res.status(500).json({ error: 'ERROR' })
      console.log(error);
    }
  },

  getEmpresaById: async (req, res) => {
    try {
      const empresa = await Empresa.findById(req.params.id);
      if (!empresa) {
        return res.status(404).json({ error: 'Empresa no encontrada' });
      }
      res.json(empresa);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la empresa por ID' });
      console.log(error);
    }
  },

  createEmpresa: async (req, res) => {
    try {
      const nuevaEmpresa = new Empresa(req.body);
      const empresaGuardada = await nuevaEmpresa.save();
      res.status(201).json(empresaGuardada);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear una nueva empresa' });
    }
  },

  

};

module.exports = controller;
