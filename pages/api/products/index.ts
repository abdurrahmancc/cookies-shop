import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../database/connect'
import {
  getProducts,
  postProduct
} from '../../../database/controllers/productsController'
import { ProductModel } from '../../../types/types'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<ProductModel>
) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  )

  const method: string | undefined = req.method

  switch (method) {
    case 'GET':
      getProducts(req, res)
      break
    case 'POST':
      postProduct(req, res)
      break
    case 'DELETE':
      res.status(200).json({ method, name: 'DELETE Request' })
      break
    case 'PUT':
      res.status(200).json({ method, name: 'PUT Request' })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`MEthod ${method} Not Allowed`)
      break
  }
}
