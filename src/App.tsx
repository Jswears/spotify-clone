import { Route, Routes } from "react-router-dom";
import "./styles/_index.scss";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:artist" element={<SearchPage />} />
      </Routes>
    </>
  );
}
//
export default App;
