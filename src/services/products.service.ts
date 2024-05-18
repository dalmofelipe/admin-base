class ProductService {

    private BASE_URL:string

    constructor() {
        this.BASE_URL = process.env.REACT_APP_ECOMMERCE_API_URL as string
    }

    async getProducts() {

        console.log(this.BASE_URL)

        return await fetch(this.BASE_URL + "/products")
            .then(response => response.json())
            .catch(error => console.error(error));
    }

}

export default ProductService