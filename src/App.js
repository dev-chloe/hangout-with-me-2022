import Topbanner from "components/TopBanner";
import { useEffect, useState } from "react";
import Router from "Router";

function App() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(true);
  }, [])
  return (
    <div className="App">
      <div className="container">
        {isReady ?
          <>
            <Topbanner></Topbanner>
            <Router />
          </>
          :
          <div>"ready"</div>
        }
      </div>
    </div>
  );
}

export default App;
