import Topbanner from "components/TopBanner";
import { useEffect, useState } from "react";
import Router from "Router";

function App() {
  const [isReady, setIsReady] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const [isNavShowed, setIsNavShowed] = useState();
  const toggledBar = () => {
    setIsNavShowed((prev) => !prev);
  }
  useEffect(() => {
    setIsReady(true);
  }, [])
  return (
    <div className="App eng">
      <div className={`container ${isNavShowed ? "toggled" : "" }`}>
        {isReady ?
          <>
            <Topbanner></Topbanner>
            <Router isLogined={isLogined} isNavShowed={isNavShowed} toggledBar={toggledBar} />
          </>
          :
          <div>"ready"</div>
        }
      </div>
    </div>
  );
}

export default App;
