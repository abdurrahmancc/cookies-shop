import { NextApiRequest, NextApiResponse } from 'next'
import { ProductModel } from '../../types/types'
import Product from '../models/productSchema'

//GET:  http://localhost:3000/api/products
export const getProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<ProductModel>
) => {
  try {
    const products: any = await Product.find({})
    if (!products) return res.status(404).json({ error: 'Data Not Found' })
    res.status(200).json(products)
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}

//GET dynamic: http://localhost:3000/api/products/id
export const getProduct = async (
  req: NextApiRequest,
  res: NextApiResponse<ProductModel>
) => {
  try {
    const productId = req.query.productId
    if (productId) {
      const products = await Product.findById({ _id: productId })
      return res.status(200).json(products)
    }
    res.status(404).json({ error: "can't not find the product...!" })
  } catch (error) {
    return res.status(404).json({ message: "Can't get the product...!" })
  }
}

//POST:  http://localhost:3000/api/products
export const postProduct = async (
  req: NextApiRequest,
  res: NextApiResponse<ProductModel>
) => {
  try {
    const formData = req.body
    if (!formData)
      return res.status(404).json({ error: 'Form Data Not Provided...!' })
    const prod = new Product(formData)
    const products = await prod.save()
    return res.status(200).json({
      status: 'success',
      message: 'data inserted successfully',
      products
    })
  } catch (error: string | any) {
    return res.status(404).json({ error })
  }
}
