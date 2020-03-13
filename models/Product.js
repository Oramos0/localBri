const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  productName: {
    type: String,
    required: true
  },
  productDescripcion: {
    type: String,
    required: true
  },
  galeryImgUrls: {
    type: Array,
    required: true
  },
  productUbication: {
    type: String,
    required: true
  },
  productPrice: {
    type: String,
    required: true
  },
  productLikes: {
    type: String,
    required: true
  },
  urlDetails: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('product', ProductSchema);
