import Topbanner from "components/TopBanner";
import { useEffect, useState } from "react";
import Router from "Router";

function App() {
  const [isReady, setIsReady] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  useEffect(() => {
    setIsReady(true);
  }, [])
  return (
    <div className="App">
      <div className="container">
        {isReady ?
          <>
            <Topbanner></Topbanner>
            <Router isLogined={isLogined} />
          </>
          :
          <div>"ready"</div>
        }
      </div>
    </div>
  );
}

export default App;
