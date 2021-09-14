import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: null,
});

export const userInfo = atom({
  key: "userInfo",
  default: null,
});
