import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post author="Lucas Santos" content="teste teste teste" />
      <Post author="Diego Fernandes" content="teste2 teste2 teste2" />
    </div>
  );
}
