// npx expo install @react-native-async-storage/async-storage
// https://docs.pmnd.rs/zustand/integrations/persisting-store-data

import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  pumpkin: string;
};

type Actions = {
  setPumpkin: (pumpkin: string) => void;
};

const usePumpkin = create<State & Actions>()(
  persist(
    (set) => ({
      pumpkin: "Pumpkin 0",
      setPumpkin: (pumpkin: string) => set(() => ({ pumpkin })),
    }),
    {
      name: "pumpkin-state-key-in-asyncstorage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default usePumpkin;
