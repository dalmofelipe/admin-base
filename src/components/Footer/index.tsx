import "./styles.css"

function Aside() {
    return (
        <footer className="footer">
            <section>
                <h2 style={{fontWeight: 100}} >AdminBase</h2>
                <small>Development v1.0.0</small>
                <br />
                <br />
                <small><b>Flex ❤️ Grid</b></small>
            </section>

            <section>
                <ul style={{listStyle: "none", textAlign: "right"}}>
                    <li><h3 style={{fontWeight: 100}} >Compartilhe</h3></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Utilidade</a></li>
                    <li><a href="/">Mapa da Mina</a></li>
                </ul>
            </section>
        </footer>
    );
}

export default Aside;