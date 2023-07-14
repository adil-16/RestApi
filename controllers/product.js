const db = require('../models');

const Product = db.products;

const addProduct = async (req, res, next) => {
  try {

    let product = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
    };

    const addedProduct = await Product.create(product);
    res.status(200).send(addedProduct);
    console.log(addedProduct);
    next();
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({});
    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
};

const getSingleProduct = async (req, res, next) => {
  try {
    let id = req.params.id;
    const product = await Product.findOne({ where: { id: id } });

    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send('Product not found.');
    }
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    let id = req.params.id;
    const product = await Product.update(req.body, { where: { id: id } });
    res.status(200).send(product);
    next();
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    let id = req.params.id;
    await Product.destroy({ where: { id: id } });
    res.status(200).send('Product has been deleted.');
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
