import Topbanner from "components/TopBanner";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loginState, navState, readyState, userState }  from "recoils";
import Router from "Router";
import AuthService from "services/AuthService";

function App() {
  const setUserState = useSetRecoilState(userState);
  const isNavShowed = useRecoilValue(navState);
  const [isReady, setIsReady] = useRecoilState(readyState);
  const setisLogined = useSetRecoilState(loginState);
  useEffect(() => {
    AuthService.refresh((loggedInUser) => {
      setIsReady(true);
      if (loggedInUser) {
        setUserState({
          displayName: loggedInUser.displayName ?? loggedInUser.email.split("@")[0],
          uid: loggedInUser.uid,
          email: loggedInUser.email
        });
        AuthService.saveProfile({
          displayName: loggedInUser.displayName ?? loggedInUser.email.split("@")[0],
          uid: loggedInUser.uid,
          email: loggedInUser.email
        });
        setisLogined(true);
        return;
      }
      setisLogined(false);
      setUserState(null);
    });
  }, []);
  return (
    <div className="App eng">
      <div className={`container ${isNavShowed ? "toggled" : "" }`}>
        {isReady ?
          <>
            <Topbanner></Topbanner>
            <Router/>
          </>
          :
          "Initializing..."
        }
      </div>
    </div>
  );
}

export default App;
