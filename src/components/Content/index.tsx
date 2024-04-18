import { useEffect, useMemo, useState } from "react";
import IpApiService from "../../services/ip-api.service";
import IpLocation from "../../types/ip-api.types";
import Footer from "../Footer";
import Toolbar from "../Toolbar";
import "./styles.css";


function Aside() {

    const ipApiService = useMemo(() => new IpApiService(), []);

    const [location, setLocation] = useState({} as IpLocation)
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        async function getLocation() {
            try {
                setLocation(await ipApiService.getLocation())
            } catch (error) {
                console.error('Erro__getLocation:', error);
            }
        }
        getLocation()

        setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

    }, [])

    const formattedTime = currentTime.toLocaleString("pt-BR");


    return (
        <main className="content">
            <Toolbar />
            
            <span style={{fontSize: "30px", fontWeight: 300}} >CONTENT</span>

            <section>

            <article style={{
                    maxWidth: "1600px",
                    margin: "20px auto", 
                    borderRadius: "5px",
                    backgroundColor: "#e2e6e8",
                    padding: "20px",
                    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.1)"
                }}>
                    <h3>{location.city} - {location.region} <small>[{location.lat}, {location.lon}]</small></h3>
                    <small>{formattedTime}</small>
            </article>


            <article style={{
                    maxWidth: "1600px",
                    margin: "20px 0", 
                    borderRadius: "5px",
                    backgroundColor: "#e2e6e8",
                    padding: "20px",
                    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.1)"
                }}>
                <h3>Titulo</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                <p>In elementis mé pra quem é amistosis quis leo. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                <p>Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
            </article>
            
            <article style={{margin: "20px 0"}}>
                <h3>Titulo</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                <p>In elementis mé pra quem é amistosis quis leo. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                <p>Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
            </article>

            <article style={{margin: "20px 0"}}>
                <h3>Titulo</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                <p>In elementis mé pra quem é amistosis quis leo. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                <p>Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
            </article>

            <article style={{margin: "20px 0"}}>
                <h3>Titulo</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                <p>In elementis mé pra quem é amistosis quis leo. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                <p>Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
            </article>
            
            <article style={{margin: "20px 0"}}>
                <h3>Titulo</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                <p>In elementis mé pra quem é amistosis quis leo. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                <p>Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
            </article>

            <article style={{margin: "20px 0"}}>
                <h3>Titulo</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                <p>In elementis mé pra quem é amistosis quis leo. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                <p>Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
            </article>

            <article style={{margin: "20px 0"}}>
                <h3>Titulo</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                <p>In elementis mé pra quem é amistosis quis leo. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                <p>Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
            </article>
            
            <article style={{margin: "20px 0"}}>
                <h3>Titulo</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                <p>In elementis mé pra quem é amistosis quis leo. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                <p>Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
            </article>

            <article style={{margin: "20px 0"}}>
                <h3>Titulo</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                <p>In elementis mé pra quem é amistosis quis leo. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                <p>Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
            </article>

            <article style={{margin: "20px 0"}}>
                <h3>Titulo</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                <p>In elementis mé pra quem é amistosis quis leo. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                <p>Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
            </article>
            
            <article style={{margin: "20px 0"}}>
                <h3>Titulo</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                <p>In elementis mé pra quem é amistosis quis leo. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                <p>Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
            </article>

            <article style={{margin: "20px 0"}}>
                <h3>Titulo</h3>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
                <p>In elementis mé pra quem é amistosis quis leo. Sapien in monti palavris qui num significa nadis i pareci latim. Leite de capivaris, leite de mula manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                <p>Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. Sapien in monti palavris qui num significa nadis i pareci latim. Per aumento de cachacis, eu reclamis.</p>
            </article>
            </section>


            <Footer />
        </main>
    );
}

export default Aside;