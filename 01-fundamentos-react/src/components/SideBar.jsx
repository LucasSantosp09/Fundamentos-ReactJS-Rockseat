import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1703192163803-e63d896d2379?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className={styles.profile}>
        <strong>Lucas </strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">Editar seu Pefil</a>
      </footer>
    </aside>
  );
}
