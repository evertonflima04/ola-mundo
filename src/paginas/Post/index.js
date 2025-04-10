import { useParams } from "react-router-dom"

export default function Post() {
    const parametro = useParams();

    console.log(parametro);
    
    return (
        <h1>Post de número: {parametro.id}</h1>
    )
}
