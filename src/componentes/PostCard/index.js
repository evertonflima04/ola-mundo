import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import BotaoPrincipal from "componentes/BotaoPrincipal";

export default function PostCard({ post }) {
  return (
    <Link to= {`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt={post.titulo}
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal children="Ler" />
      </div>
    </Link>
  );
}
