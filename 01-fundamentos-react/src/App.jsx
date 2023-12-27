import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";
import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wraper}>
        <Sidebar />
        <main>
          <Post author="Lucas Santos" content="teste teste teste" />
          <Post author="Diego Fernandes" content="teste2 teste2 teste2" />
        </main>
      </div>
    </div>
  );
}
