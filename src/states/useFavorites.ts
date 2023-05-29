// https://docs.pmnd.rs/zustand/guides/maps-and-sets-usage
// https://docs.pmnd.rs/zustand/integrations/immer-middleware

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Favorite } from "../types/Favorite";
import { enableMapSet } from "immer";

enableMapSet();

type State = {
  favorites: Map<number, Favorite>;
};

type Actions = {
  addFavorite: (id: number, favorite: Favorite) => void;
  removeFavorite: (id: number) => void;
  clickFavorite: (id: number) => void;
};

export const useFavorites = create(
  immer<State & Actions>((set) => ({
    favorites: new Map<number, Favorite>(),

    addFavorite: (id: number, favorite: Favorite) => {
      set((state) => {
        state.favorites.set(id, favorite);
      });
    },

    removeFavorite: (id: number) => {
      set((state) => {
        state.favorites.delete(id);
      });
    },

    clickFavorite: (id: number) => {
      set((state) => {
        state.favorites.get(id)!.clicks += 1;
      });
    },
  }))
);

export default useFavorites;
