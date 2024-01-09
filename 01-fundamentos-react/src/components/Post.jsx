import { format } from "date-fns";
import { Avatar } from "./Avatar.JSX";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

//author: {avatar_url: "", name:"", role="" }
//publisheAt: Date
//content: String

export function Post({ author, content }) {
  //const publishedDateFormatted = format();

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.author}>
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
        </div>
        <time
          title="27 de Dezembro de 2023"
          dateTime="2023-12-27 19:53:00"
        ></time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type == "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p>
                <a href="#">{line.content}</a>{" "}
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
