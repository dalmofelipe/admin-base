import { GiDeathStar } from "react-icons/gi";

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
                        <li><a className="aside-link" href="/">Content 1</a></li>
                        <li><a className="aside-link" href="/">Content 2</a></li>
                        <li><a className="aside-link" href="/">Content 3</a></li>
                    </ul>
                </div>

                <div className="amenu-bottom">
                    <ul className="aside-links">
                        <li><a className="aside-link" href="/">Content 1</a></li>
                        <li><a className="aside-link" href="/">Content 2</a></li>
                    </ul>
                </div>

            </menu>
            
        </aside>
    );
}

export default Aside;