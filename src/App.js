import "./assets/css/style.css";
import Header from "./components/Header";
import AllNews from "./pages/AllNews";
import PostDetailPage from "./pages/PostDetailPage";
import PostDetailPage2 from "./pages/PostDetailPage2";
import PostDetailPage3 from "./pages/PostDetailPage3";
import CategoriasPage from "./pages/CategoriasPage";
import PostsByCategoryPage from "./pages/PostsByCategoryPage";
import Politica from "./pages/Politica"
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Politica />} />
          <Route path="/allnews" element={<AllNews />} />
          <Route path="/post" element={<PostDetailPage />} />
          <Route path="/post2" element={<PostDetailPage2 />} />
          <Route path="/post3" element={<PostDetailPage3 />} />
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/category/posts" element={<PostsByCategoryPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
