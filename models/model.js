const mongoose = require('mongoose');

const empresaData = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  categorias: [String],
  enlaces: {
    redesSociales: String,
    paginaWeb: String,
    video: String,
  }
});

const Empresa = mongoose.model('Empresa', empresaData);

module.exports = Empresa;

