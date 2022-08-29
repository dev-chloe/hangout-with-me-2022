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