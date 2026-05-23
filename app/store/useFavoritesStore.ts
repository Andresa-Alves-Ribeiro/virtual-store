import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FavoritesStore {
    likedIds: number[];
    hasHydrated: boolean;
    setHasHydrated: (value: boolean) => void;
    toggleLike: (id: number) => void;
    isLiked: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>()(
    persist(
        (set, get) => ({
            likedIds: [],
            hasHydrated: false,
            setHasHydrated: (value) => set({ hasHydrated: value }),
            toggleLike: (id) =>
                set((state) => ({
                    likedIds: state.likedIds.includes(id)
                        ? state.likedIds.filter((x) => x !== id)
                        : [...state.likedIds, id],
                })),
            isLiked: (id) => get().likedIds.includes(id),
        }),
        {
            name: "favorites-storage",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ likedIds: state.likedIds }),
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
);
