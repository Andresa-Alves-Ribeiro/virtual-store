"use client"

import { BiHeart, BiSearch } from "react-icons/bi";
import { FaMusic } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { CartDrawer } from "../CartDrawer/CartDrawer";
import { useState } from "react";
import { useCartStore } from "@/app/store/useCartStore";

export default function Header() {
    const { items } = useCartStore();
    const [cartOpen, setCartOpen] = useState(false)

    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950">
            <span className="bg-purple-700 text-white font-bold w-full flex items-center justify-center text-sm p-2">
                🎉 BLACK FRIDAY - Até 40% OFF + Frete Grátis acima de R$ 500
            </span>

            <div className="p-4 flex justify-evenly items-center">
                <div className="flex gap-2">
                    <div className="bg-purple-600 px-3 py-2 flex items-center justify-center rounded-xl">
                        <FaMusic size={24} color="white" />
                    </div>

                    <div className="leading-none">
                        <h3 className="font-bold text-xl text-white">MusicStore</h3>
                        <span className="text-purple-400 text-xs">Pro Audio & Instruments</span>
                    </div>
                </div>

                <div className="relative">
                    <BiSearch
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                    />

                    <input placeholder="Buscar instrumentos, marcas, modelos..."
                        className="placeholder-zinc-500 border border-zinc-600 bg-zinc-800 rounded-md py-3 pr-3 pl-10 w-140" />
                </div>

                <div className="flex gap-3">
                    <button className="cursor-pointer flex gap-2 items-center text-sm px-3 rounded-xl bg-transparent hover:bg-zinc-900 transition-colors">
                        <BiHeart size={22} color="#d4d4d8" />
                    </button>

                    <button className="cursor-pointer text-zinc-300 flex gap-2 items-center border border-zinc-700 text-sm p-3 rounded-2xl bg-transparent hover:bg-zinc-900 transition-colors">
                        <FiUser />
                        Entrar
                    </button>

                    <button onClick={() => setCartOpen(true)} className="relative cursor-pointer flex gap-1 items-center bg-purple-600 text-white  p-3 rounded-xl font-bold">
                        <IoCartOutline size={22} />
                        Carrinho

                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
        </header>
    );
}
