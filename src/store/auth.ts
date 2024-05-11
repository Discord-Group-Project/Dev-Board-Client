import { create } from "zustand";
import Cookie from "js-cookie";
import { devtools } from "zustand/middleware";

interface AuthState {
  auth: {
    isAuth: boolean;
    user?: object;
  };
  signIn: (user: object) => void;
}

// eslint-disable-next-line prefer-const
let initialState = {
  isAuth: false,
  user: {},
};

const userInfo = Cookie.get("user_info");

if (userInfo) {
  const data = JSON.parse(userInfo);
  initialState.isAuth = data.isAuth;
  initialState.user = data.user;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    auth: initialState,
    signIn: () => set(() => ({})),
  }))
);
