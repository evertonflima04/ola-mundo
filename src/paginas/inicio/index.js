import styles from "./Inicio.module.css";
import posts from "json/posts.json";
import PostCard from "componentes/PostCard";

export default function Inicio() {
  return (
      <ul className={styles.posts}>
        {posts.map((post) => (  // // Mapeia os posts do JSON e renderiza um PostCard para cada um
            // O componente PostCard recebe o post como props
            // e renderiza as informações do post
            <li key={post.id}>
                <PostCard post={post} />
            </li>
            
        ))}
      </ul>
      
  );
}
