const express = require('express')
const router = express.Router()
const Product = require('../models/product')

// Getting all
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
/*
// Getting One
router.get('/:id', getproduct, (req, res) => {
  res.json(res.product)
})*/

// Creating one
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    id:req.body.id,
    price:req.body.price,
    descreption:req.body.descreption
  
  })
  
  try {
    const newproduct = await product.save()
    res.status(201).json(newproduct)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})
/*
// Updating One
router.patch('/:id', getproduct, async (req, res) => {
  if (req.body.name != null) {
    res.product.name = req.body.name
  }
  if (req.body.subscribedToChannel != null) {
    res.product.productdToChannel = req.body.productdToChannel
  }
  try {
    const updatedproductr = await res.product.save()
    res.json(updatedproduct)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getproduct, async (req, res) => {
  try {
    await res.product.remove()
    res.json({ message: 'Deleted product' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getproduct(req, res, next) {
  let product
  try {
    product = await product.findById(req.params.id)
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.product = product
  next()
}
*/
module.exports = router