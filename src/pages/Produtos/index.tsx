import { VscArchive } from "react-icons/vsc";
import Content from "../../components/Content";
import ListaProdutoCard from "../../components/ListaProdutoCard";
import NovoProdutoCard from "../../components/NovoProdutoCard";

import "./styles.css";

function Produtos() {
    return (
        <Content icon={<VscArchive />} title="Produtos">
            <NovoProdutoCard />
            <ListaProdutoCard />
        </Content>
    )
}

export default Produtos