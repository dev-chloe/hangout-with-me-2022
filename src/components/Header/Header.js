import { faFaceGrinBeam, faRightFromBracket, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { loginState, userState } from "recoils";
import AuthService from "services/AuthService";
import style from "./Header.module.scss";

const Header = () => {
  const isLogined = useRecoilValue(loginState);
  const resetUser = useResetRecoilState(userState);
  const userName = useRecoilValue(userState);
  const logout = () => {
    resetUser();
    AuthService.logout();
  };
  return (
    <header className={style.header}>
      <ul>
        {isLogined ?
          <>
            <li>
              <Link to="/">
                <div   className="user_icon">
                  <FontAwesomeIcon icon={faFaceGrinBeam} />
                </div>
                <p>{userName.displayName}</p>
              </Link>
            </li>
            <li>
              <button onClick={logout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                로그아웃
              </button>
            </li>
          </>
          :
          <>
            <li>
              <Link to="/login">
                <FontAwesomeIcon icon={faRightToBracket} />
                로그인
              </Link>
            </li>
            <li>
              <Link to="/join">
                <FontAwesomeIcon icon={faUser} />
                회원가입
              </Link>
            </li>
          </>
        }
      </ul>
    </header>
  );
};

export default Header;