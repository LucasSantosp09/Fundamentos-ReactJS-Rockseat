import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/LucasSantosp09.png"
            alt=""
          />
          <div className={styles.author}>
            <strong>Lucas Santos</strong>
            <span>Web Develop</span>
          </div>
        </div>
        <time title="27 de Dezembro de 2023" dateTime="2023-12-27 19:53:00">
          Publicado há 1 hora
        </time>
      </header>
      <div className={styles.contet}>
        <p>
          Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é DoctorCare 🚀
        </p>

        <p>
          <a href="">👉 jane.design/doctorcare </a>
        </p>

        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>{" "}
        </p>
      </div>
    </article>
  );
}
