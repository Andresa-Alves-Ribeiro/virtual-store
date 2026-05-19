import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem } from "../context/CartContext";

interface CartStore {
    items: CartItem[];
    addItem: (item: Omit<CartItem, "qty">) => void;
    removeItem: (id: number) => void;
    changeQty: (id: number, delta: number) => void;
    clearCart: () => void;
    totalItems: () => number;
    subtotal: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (newItem) =>
                set((state) => {
                    const existing = state.items.find((i) => i.id === newItem.id);
                    if (existing) {
                        return {
                            items: state.items.map((i) =>
                                i.id === newItem.id ? { ...i, qty: i.quantity + 1 } : i
                            ),
                        };
                    }
                    return { items: [...state.items, { ...newItem, qty: 1 }] };
                }),

            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                })),

            changeQty: (id, delta) =>
                set((state) => ({
                    items: state.items
                        .map((i) => (i.id === id ? { ...i, qty: i.quantity + delta } : i))
                        .filter((i) => i.quantity > 0),
                })),

            clearCart: () => set({ items: [] }),

            totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

            subtotal: () =>
                get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ items: state.items }),
        }
    )
);