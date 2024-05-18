import Content from "../../components/Content"
import { VscArchive } from "react-icons/vsc";

import "./styles.css"

function Produtos() {
    return (
        <Content icon={<VscArchive />} title="Produtos">
            <div className="produtos">
                PRODUTOS
            </div>
        </Content>
    )
}

export default Produtos