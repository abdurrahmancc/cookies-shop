export interface Product {
  _id: string
  name: string
  price: number
  regularPrice: number
  quantity: number
  reviewQuantity: number
  category: number
  subCategory: string
  date?: string
  status: string
  img: string
  description: string
  badge: string
  updatedAt: string
  createdAt: string
}

export type BreadcrumbModel = {
  label: string
  value: string
}

export type ProductModel = {
  name?: string
  method?: string
  error?: string | undefined
  products?: any
  status?: string | number
  message?: string
}

export type CartModel = {
  _id: string
}

export type BlogsDataModel = {
  _id: string
  title: string
  date: string
  img: any
  description: string
}
