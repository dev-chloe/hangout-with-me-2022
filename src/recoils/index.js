import { atom } from "recoil";

export const readyState = atom({
  key: "readyState",
  default: false
});

export const loginState = atom({
  key: "loginState",
  default: false
});

export const navState = atom({
  key: "navState",
  default: false
});

export const userState = atom({
  key: "userState",
  default: {
    displayName: "",
    email: "",
    uid: ""
  }
});