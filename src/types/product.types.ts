type Product = {
    id: number
    name: string
    brand: string
    details: string
    price: number
    category: {
        id: number
        name?: string
        categoryRoot: string
    }
}

export default Product