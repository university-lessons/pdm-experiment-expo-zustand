import { create } from "zustand";
import { User } from "../types/User";

type State = {
  user: User | null;
};

type Actions = {
  setUser: (user: User | null) => void;
};

const useUser = create<State & Actions>()((set) => ({
  user: null,
  setUser: (user: User | null) => set(() => ({ user })),
}));

export default useUser;
