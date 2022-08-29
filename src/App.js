import Topbanner from "components/TopBanner";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState, navState, readyState }  from "recoils";
import Router from "Router";

function App() {
  const [isReady, setIsReady] = useRecoilState(readyState);
  const [isLogined, setIsLogined] = useRecoilState(loginState);
  const [isNavShowed, setIsNavShowed] = useRecoilState(navState);
  const toggledBar = () => {
    setIsNavShowed((prev) => !prev);
  };
  useEffect(() => {
    setIsLogined();
    setIsReady(true);
  }, []);
  return (
    <div className="App eng">
      <div className={`container ${isNavShowed ? "toggled" : "" }`}>
        {isReady ?
          <>
            <Topbanner></Topbanner>
            <Router isLogined={isLogined} toggledBar={toggledBar} />
          </>
          :
          "Initializing..."
        }
      </div>
    </div>
  );
}

export default App;
