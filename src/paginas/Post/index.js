import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";


export default function Post() {
  const parametro = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametro.id);
  });

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >

      <ReactMarkdown>
        {post.texto}
      </ReactMarkdown>
    
    </PostModelo>
  );
}
