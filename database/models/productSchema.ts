import { Schema, models, model } from 'mongoose'

const productSchema = new Schema(
  {
    name: String,
    price: {
      type: Number,
      required: [true, 'Product Price is required']
    },
    regularPrice: Number,
    quantity: {
      type: Number,
      required: [true, 'quantity is required']
    },
    category: {
      type: String,
      required: [true, 'product category is required']
    },
    reviewQuantity: {
      type: Number
    },
    subCategory: {
      type: String,
      required: [true, '']
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive']
    },
    img: {
      type: String,
      required: [true, 'Product image is required']
    },
    description: {
      type: String,
      required: [true, 'product description is required']
    },
    badge: String
  },
  {
    timestamps: true
  }
)

const Product = models.Product || model('Product', productSchema)

export default Product
