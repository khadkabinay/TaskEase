import { selector } from "recoil";
import { userState } from "./atoms";
import { userInfo } from "./atoms";



export const loggedInState = selector({
  key: "loggedInState",
  get: ({ get }) => {
    const user = get(userState);
    if (user) return true;
    return false;
  },
});




export const userRole = selector({
  key: "userRole",
  get: ({ get }) => {
    const user = get(userInfo);
   return user
  },
});


