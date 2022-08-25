import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "routes/Home";
import Login from "routes/Login";

const Router = ({isLogined, isNavShowed, toggledBar}) => {
  return (
    <HashRouter>
      <Header isLogined={isLogined}></Header>
      <Sidebar isNavShowed={isNavShowed} toggledBar={toggledBar} ></Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  )
}

export default Router;