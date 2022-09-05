import ContentDetail from "components/ContentDetail";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "recoils";
import Content from "routes/Content";
import Home from "routes/Home";
import Join from "routes/Join";
import Login from "routes/Login";

const Router = () => {
  const isLogined = useRecoilValue(loginState);
  return (
    <HashRouter>
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contents" element={<Content />} />
        <Route path="/contents:id" element={<ContentDetail />} />
        {isLogined ? 
          <> </>
          :
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
          </>
        }
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;