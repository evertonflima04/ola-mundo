import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    return (
        // Outlet é um espaço reservado para renderizar os componentes filhos
        // que são definidos nas rotas do React Router
        <main>
            <Banner />
            <Outlet />  
        </main>
    );
}