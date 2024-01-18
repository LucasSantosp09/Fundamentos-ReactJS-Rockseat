import { useState } from "react";
import { Avatar } from "./Avatar.JSX";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content }) {
  const [comments, setComments] = useState(["Post muito bacana, hein ?!"]);

  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }

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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>{" "}
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
