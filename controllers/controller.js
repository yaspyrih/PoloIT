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
      res.status(500).json({ error: 'No se pudo encontrar la empresa' });
      console.log(error);
    }
  },

  createEmpresa: async (req, res) => {
    try {
      const nuevaEmpresa = new Empresa(req.body);
      const empresaGuardada = await nuevaEmpresa.save();
      res.status(201).json(empresaGuardada);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo crear la nueva empresa' });
    }
  },

  updateEmpresa: async (req, res) => {
    try {
      const empresaUpdate = await Empresa.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!empresaUpdate) {
        return res.status(404).json({ error: 'Empresa no encontrada' });
      }
      res.json(empresaUpdate);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo actualizar la empresa' });
    }
  },

  deleteEmpresa: async (req, res) => {
    try {
      const empresaEliminada = await Empresa.findByIdAndRemove(req.params.id);
      if (!empresaEliminada) {
        return res.status(404).json({ error: 'Empresa no encontrada' });
      }
      res.json({ mensaje: 'La empresa fue eliminada' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la empresa' });
    }
  },


};

module.exports = controller;
