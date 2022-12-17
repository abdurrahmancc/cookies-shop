import { getProduct } from './../../../database/controllers/productsController'
import { NextApiRequest, NextApiResponse } from 'next'
import { ProductModel } from '../../../types/types'
import connectMongo from '../../../database/connect'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ProductModel | any>
) => {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' })
  )
  const method: string | undefined = req.method

  switch (method) {
    case 'GET':
      getProduct(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`MEthod ${method} Not Allowed`)
      break
  }
}

export default handler
