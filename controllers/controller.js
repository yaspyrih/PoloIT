const Empresa = require('../models/empresaModel');

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
  
};

module.exports = controller;
