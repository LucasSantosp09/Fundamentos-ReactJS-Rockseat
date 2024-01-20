import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";
import "./global.css";
import styles from "./App.module.css";
import { PostType } from "./components/Post";

//author: {avatar_url: "", name:"", role="" }
//publisheAt: Date
//content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/LucasSantosp09.png",
      name: "Lucas Santos",
      role: "Desenvolvedor Full Stack",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Post 1 - Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Post 2 - Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wraper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
