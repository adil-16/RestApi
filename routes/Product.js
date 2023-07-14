const productController = require("../controllers/product");
const router = require("express").Router();

router.post('/addProduct', productController.addProduct);

router.get('/getAllProduct', productController.getAllProducts);

router.get('/:id', productController.getSingleProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router
