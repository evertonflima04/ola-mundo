import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";

console.log(window.location);

const pagina = window.location.pathname === "/" ? <Inicio /> : <SobreMim />;

function App() {
  return pagina;
}

export default App;
