const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const upload = require('../middleware/multer');

const User = require('../models/User');
const Product = require('../models/Product');

//@route    GET api/products/all
//@desc     Get all products
//@acces    Public
router.get('/all', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

//@route    GET api/products
//@desc     Get products from user
//@acces    Private
router.get('/', auth, async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(products);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

//@route    POST api/products/images
//@desx     Add photos to new products
//@Access   Private
router.post('/images', upload.array('galeryImgUrls', 5), async (req, res) => {
  const galeryImgUrls = [];
  for (let i = 0; i < req.files.length; i++) {
    galeryImgUrls.push(
      `http://localhost:5000/products/${req.files[i].filename}`
    );
  }
  res.json(galeryImgUrls);
});

//@route    POST api/products
//@desc     Add new product
//@acces    Private
router.post(
  '/',
  [
    auth,
    [
      check('productName', 'Product name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }

    const {
      productName,
      productDescripcion,
      galeryImgUrls,
      productUbication,
      productPrice,
      productLikes,
      urlDetails,
      category
    } = req.body;

    console.log(productName);

    try {
      const newProduct = new Product({
        productName,
        productDescripcion,
        galeryImgUrls,
        productUbication,
        productPrice,
        productLikes,
        urlDetails,
        category,
        user: req.user.id
      });

      const product = await newProduct.save();

      res.json(product);
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .send('Server Error')
        .json({ msg: 'Algo Salio mal, Intente de nuevo mas tarde u.u' });
    }
    console.log('terminado n.n');
  }
);

//@route    PUT api/products
//@desc     Update product
//@acces    Private
router.put('/:id', auth, async (req, res) => {
  const {
    productName,
    productDescripcion,
    galeryImgUrls,
    productUbication,
    productPrice,
    category
  } = req.body;

  // product Object to update
  const productFields = {};
  if (productName) productFields.productName = productName;
  if (productDescripcion) productFields.productDescripcion = productDescripcion;
  if (galeryImgUrls) productFields.galeryImgUrls = urlImage;
  if (productUbication) productFields.productUbication = productUbication;
  if (productPrice) productFields.productPrice = productPrice;
  if (category) productFields.category = category;

  try {
    let product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ msg: 'Product not found' });

    // Make sure user owns product
    if (product.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: productFields },
      { new: true }
    );

    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//@route    DELETE api/products
//@desc     Delete product
//@acces    Public
router.delete('/:id', auth, async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ msg: 'Product not found' });

    // Make sure user owns product
    if (product.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Product.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Product Removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server ErrorD');
  }
});

module.exports = router;
