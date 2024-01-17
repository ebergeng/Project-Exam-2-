import { create } from "zustand";
import { checkLoginStatus, checkManagerStatus } from "../api/auth/state";

const profileStore = create((set) => ({
  isLoggedIn: checkLoginStatus(),
  managerState: checkManagerStatus(),
  setIsLoggedIn: (newState) => set({ isLoggedIn: newState }),
  setManagerState: (newState) => set({ managerState: newState }),
}));

export default profileStore;
