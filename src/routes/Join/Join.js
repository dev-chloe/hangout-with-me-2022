import { useState } from "react";
import AuthService from "services/AuthService";
import style from "./Join.module.scss";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const { target: { name, value } } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    AuthService.signUp({ email, password });
  };
  return (
    <div className="wrapper">
      <form onSubmit={onSubmit} className={style.form}>
        <input name="email" type="email" placeholder="Email" onChange={onChange} />
        <input name="password" type="password" placeholder="Password" onChange={onChange}/>
        <button className={`main_btn ${style.main_btn}`}><span data-text="Sign Up"></span></button>
      </form>
    </div>
  );
};

export default Join;