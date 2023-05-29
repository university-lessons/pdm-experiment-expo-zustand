import { create } from "zustand";
import { User } from "../types/User";

interface UseUserStateProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const useUser = create<UseUserStateProps>()((set) => ({
  user: null,
  setUser: (user: User | null) => set(() => ({ user })),
}));

export default useUser;
