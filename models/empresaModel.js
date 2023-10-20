const mongoose = require('mongoose');
const empresaData = require('./empresaData'); 

const Empresa = mongoose.model('Empresa', empresaData);

module.exports = Empresa;
