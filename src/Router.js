import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "routes/Home";

const Router = () => {
  return (
    <HashRouter>
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default Router;