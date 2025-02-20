import { create } from 'zustand';

export interface SystemStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  isSleeping: boolean;
  setIsSleeping: (isSleeping: boolean) => void;
  isBooted: boolean;
  setIsBooted: (isBooted: boolean) => void;
}

export const useSystemStore = create<SystemStore>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  isSleeping: false,
  setIsSleeping: (isSleeping) => set({ isSleeping }),
  isBooted: false,
  setIsBooted: (isBooted) => set({ isBooted })
}));
