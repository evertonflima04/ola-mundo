import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();  // Saber qual a página está sendo acessada

    useEffect(() => {  //useEffect é um hook que executa uma função quando o componente é montado ou atualizado
        // O segundo parâmetro é um array de dependências, se o pathname mudar, a função será executada novamente
        window.scrollTo(0, 0);
    }, [pathname]); 

    return null;
}