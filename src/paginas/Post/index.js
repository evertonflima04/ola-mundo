import "./Post.css";
import styles from "./Post.module.css";

import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import Markdown from "markdown-to-jsx";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

export default function Post() {
  const parametro = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametro.id);
  });

  
  if (!post) {
    return <NaoEncontrada />; 
  }

  //Exibir posts recomendados 
  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametro.id)) // Exclui o post do parâmetro atual
    .sort((a, b) => b.id - a.id)  //Ordena os posts por id, do maior para o menor
    .slice(0, 4);  //Pega os 4 primeiros posts

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
              children={post.texto}
            >
              <div className="post-markdown-container">
                <Markdown>{post.texto}</Markdown>
              </div>

              <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
              </h2>

              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
