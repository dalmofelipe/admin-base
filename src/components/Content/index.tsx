import { ReactNode } from "react";
import "./styles.css";

type ContentProps = { 
    title:string 
    children:ReactNode
}

function Content({title, children}:ContentProps) {
    return (
        <main className="content">
            <span style={{fontSize: "30px", fontWeight: 300}} >
                {title}
            </span>

            {children}
        </main>
    );
}

export default Content;