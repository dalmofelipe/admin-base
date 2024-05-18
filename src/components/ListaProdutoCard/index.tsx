import { useEffect, useMemo, useState } from "react";
import ProductService from '../../services/products.service';
import Product from "../../types/product.types";
import Card from "../Card";
import "./styles.css";

function ListaProdutoCard() {

    const [ products, setProducts ] = useState([{} as Product])

    let productService = useMemo(() => new ProductService(), [])

    useEffect(() => {
        async function run() {
            try {
                setProducts(await productService.getProducts())
            } catch (error) {
                console.error('Erro__getProducts:', error);
            }
        }

        run()
    }, [])

    return (
        <Card title="todos os produtos">
            <div className="lpc">
            <table>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th align="left" scope="col">Nome</th>
                    <th align="left" scope="col">Marca</th>
                    <th align="left" scope="col">Detalhes</th>
                    <th align="left" scope="col">Preço</th>
                    <th align="left" scope="col">Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products ? 
                        products.map((p) => {
                            return (
                                <tr key={p.id}>
                                    <th scope="row">{p.id}</th>
                                    <td>{p.name}</td>
                                    <td>{p.brand}</td>
                                    <td>{p.details}</td>
                                    <td>{p.price}</td>
                                    <td align="left">{p.category?.name}</td>
                                </tr>
                            )
                        })
                        :<tr key={1}><td colSpan={6}>Nenhum produto encontrado...</td></tr>
                    }
                </tbody>
                </table>

            </div>
        </Card>
    )
}

export default ListaProdutoCard