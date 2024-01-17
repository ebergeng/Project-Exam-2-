import { create } from "zustand";

const useModalStore = create((set) => ({
  isClosing: false,
  setIsClosing: (newState) => set({ isClosing: newState }),
}));

export const testModalStore = create((set) => ({
  loginModalOpen: true,
  registerModalOpen: false,
  openLoginModal: () => set({ loginModalOpen: true }),
  closeLoginModal: () => set({ loginModalOpen: false }),
  openRegisterModal: () => set({ registerModalOpen: true }),
  closeRegisterModal: () => set({ registerModalOpen: false }),
}));

export default useModalStore;
