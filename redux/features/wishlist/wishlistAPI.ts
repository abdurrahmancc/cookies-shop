import { ProductModel } from '../../../types/types'

const cookiesBakeryWishlist = 'cookies-bakery-wishlist'

/*--------- get all wishlist -----------*/
export const getWishlist = async () => {
  try {
    let wishlist: ProductModel | {} = {}
    const storageWishlist = localStorage.getItem(cookiesBakeryWishlist)
    if (storageWishlist) {
      wishlist = JSON.parse(storageWishlist)
    }
    const keys = Object?.keys(wishlist || {})
    return keys
  } catch (error: any) {
    console.log(error?.message)
  }
}

/*--------- delete wishlist -----------*/
export const deleteWishlist = async (id: string) => {
  try {
    const storedWishlist = localStorage.getItem(cookiesBakeryWishlist)
    if (storedWishlist) {
      const wishlist = await JSON.parse(storedWishlist)
      if (id in wishlist) {
        delete wishlist[id]
        localStorage.setItem(cookiesBakeryWishlist, JSON.stringify(wishlist))
        const keys = Object?.keys(wishlist || {})
        return keys
      }
    }
  } catch (error: any) {
    console.log(error?.message)
  }
}

/*--------- add to wishlist -----------*/
export const addWishlist = async (id: string) => {
  try {
    let wishlist: any = {}
    const storedWishlist = localStorage.getItem(cookiesBakeryWishlist)
    if (storedWishlist) {
      wishlist = JSON.parse(storedWishlist)
    }
    // add quantity
    const quantity = wishlist[id]
    let _id = ''
    if (quantity) {
      const newQuantity = quantity + 1
      wishlist[id] = newQuantity
      _id = ''
    } else {
      wishlist[id] = 1
      _id = id
    }
    localStorage.setItem(cookiesBakeryWishlist, JSON.stringify(wishlist))
    return _id
  } catch (error: any) {
    console.log(error?.message)
  }
}

/*----------- delete All wishlist   --------------*/
export const deleteAllWishlist = () => {
  localStorage.removeItem(cookiesBakeryWishlist)
  const data: [] = []
  return data
}
