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
            <span className="flex w-full items-center justify-center bg-purple-700 px-3 py-2 text-center text-xs font-bold text-white sm:text-sm">
                🎉 BLACK FRIDAY — Até 40% OFF + Frete grátis acima de R$ 500
            </span>

            <div className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex min-w-0 items-center justify-between gap-2 lg:justify-start">
                    <div className="flex min-w-0 gap-2">
                        <div className="flex shrink-0 items-center justify-center rounded-xl bg-purple-600 px-2.5 py-2 sm:px-3">
                            <FaMusic size={24} color="white" />
                        </div>

                        <div className="min-w-0 leading-none">
                            <h3 className="truncate text-lg font-bold text-white sm:text-xl">MusicStore</h3>
                            <span className="hidden text-xs text-purple-400 sm:inline">
                                Pro Audio & Instruments
                            </span>
                        </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
                        <button
                            type="button"
                            className="flex cursor-pointer items-center justify-center rounded-xl p-2.5 transition-colors hover:bg-zinc-900 sm:px-3"
                            aria-label="Favoritos"
                        >
                            <BiHeart size={22} color="#d4d4d8" />
                        </button>

                        <button
                            type="button"
                            className="flex cursor-pointer items-center justify-center rounded-2xl border border-zinc-700 p-2.5 text-zinc-300 transition-colors hover:bg-zinc-900 sm:px-3"
                            aria-label="Entrar"
                        >
                            <FiUser size={20} />
                        </button>

                        <button
                            type="button"
                            onClick={() => setCartOpen(true)}
                            className="relative flex cursor-pointer items-center justify-center rounded-xl bg-purple-600 p-2.5 text-white sm:gap-1 sm:px-3"
                            aria-label={`Carrinho${totalItems > 0 ? `, ${totalItems} itens` : ""}`}
                        >
                            <IoCartOutline size={22} />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                <div className="relative w-full min-w-0 lg:max-w-xl lg:flex-1 xl:max-w-2xl">
                    <BiSearch
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                    />

                    <input
                        placeholder="Buscar instrumentos, marcas..."
                        className="w-full rounded-md border border-zinc-600 bg-zinc-800 py-2.5 pr-3 pl-10 text-sm placeholder-zinc-500 sm:py-3 sm:text-base"
                    />
                </div>

                <div className="hidden shrink-0 items-center gap-2 lg:flex lg:gap-3">
                    <button
                        type="button"
                        className="flex cursor-pointer items-center gap-2 rounded-xl px-3 text-sm transition-colors hover:bg-zinc-900"
                        aria-label="Favoritos"
                    >
                        <BiHeart size={22} color="#d4d4d8" />
                    </button>

                    <button
                        type="button"
                        className="flex cursor-pointer items-center gap-2 rounded-2xl border border-zinc-700 p-3 text-sm text-zinc-300 transition-colors hover:bg-zinc-900"
                    >
                        <FiUser />
                        Entrar
                    </button>

                    <button
                        type="button"
                        onClick={() => setCartOpen(true)}
                        className="relative flex cursor-pointer items-center gap-1 rounded-xl bg-purple-600 p-3 font-bold text-white"
                    >
                        <IoCartOutline size={22} />
                        Carrinho
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
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
