import styles from "./Comment.module.css";
import { Trash } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar.JSX";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteCommnet() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/LucasSantosp09.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Santos</strong>
              <time
                title="27 de Dezembro de 2023"
                dateTime="2023-12-27 19:53:00"
              >
                Cerca de há 2 hora atrás
              </time>
            </div>
            <button onClick={handleDeleteCommnet} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
