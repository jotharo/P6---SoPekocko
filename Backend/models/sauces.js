// MONGOOSE DB : Création d'un modèle Sauce 

// A noter : pas besoin de mettre un champ pour l'Id puisqu'il est automatiquement généré par Mongoose.

const mongoose = require('mongoose'); // Import de Mongoose

// Création du modèle 'sauce'.

const sauceSchema = mongoose.Schema({
  userId :{type: String, required: true},
  name: {type: String, required: true},
  manufacturer: {type: String, required: true},
  description: {type: String, required: true},
  mainPepper: {type: String, required: true},
  imageUrl: {type: String, required: true},
  heat: {type: Number, required: true},
  likes: {type: Number, required: false, default:0},
  dislikes: {type: Number, required: false, default:0},
  usersLiked: {type: [String], required: false, default:[]},
  usersDisliked: {type: [String],required: false, default:[]},
});


module.exports = mongoose.model('Sauce', sauceSchema); // Exportation du schéma en tant que modèle Mongoose 
                                                       // Rend 'Sauce' disponible pour intéragir avec l' application.