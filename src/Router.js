import ContentDetail from "components/ContentDetail";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Content from "routes/Content";
import Home from "routes/Home";
import Join from "routes/Join";
import Login from "routes/Login";

const Router = ({ isNavShowed, toggledBar}) => {
  return (
    <HashRouter>
      <Header></Header>
      <Sidebar isNavShowed={isNavShowed} toggledBar={toggledBar} ></Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contents" element={<Content />} />
        <Route path="/contents:id" element={<ContentDetail />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;