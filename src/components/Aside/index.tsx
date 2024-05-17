import { GiDeathStar } from "react-icons/gi";

import { Link } from "react-router-dom";
import "./styles.css";


function Aside() {
    return (
        <aside className="aside">

            <div className="logo">
                <GiDeathStar />
                <span>
                    <span>ADMIN </span> 
                    <strong>BASE</strong>
                </span>
            </div>

            <menu className="aside-menu">

                <div className="amenu-top">
                    <ul className="aside-links">
                        <li><Link className="aside-link abtn-default" to="/">Dashboard</Link></li>
                        <li><Link className="aside-link abtn-default" to="/products">Produtos</Link></li>
                    </ul>
                </div>

                <div className="amenu-bottom">
                    <ul className="aside-links">
                        <li><a className="aside-link abtn-success" href="/">Sobre</a></li>
                        <li><a className="aside-link abtn-danger" href="/">Configurações</a></li>
                    </ul>
                </div>

            </menu>
            
        </aside>
    );
}

export default Aside;