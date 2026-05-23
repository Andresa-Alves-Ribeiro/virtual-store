"use client"

import catalogy from "@/app/data/catalog";
import type { IconType } from "react-icons";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { GrGrid } from "react-icons/gr";
import { HiOutlineFunnel } from "react-icons/hi2";
import { LuMic } from "react-icons/lu";
import { PiGuitar, PiPianoKeysFill } from "react-icons/pi";
import { TbWind } from "react-icons/tb";

type CategoriesType = {
    id: number;
    name: string;
    items: number;
    icon: IconType;
};

const instruments = catalogy.map((item) => (
    item.instrument_type
))

const categories: CategoriesType[] = [
    { id: 1, name: "Todos", items: instruments.length, icon: GrGrid },
    { id: 2, name: "Cordas de arco", items: instruments.filter(i => i === "Cordas de arco").length, icon: PiGuitar },
    { id: 3, name: "Cordas tangidas", items: instruments.filter(i => i === "Cordas tangidas").length, icon: PiGuitar },
    { id: 4, name: "Percussão melódica", items: instruments.filter(i => i === "Percussão melódica").length, icon: BsMusicNoteBeamed },
    { id: 5, name: "Percussão ritmica", items: instruments.filter(i => i === "Percussão ritmica").length, icon: PiGuitar },
    { id: 6, name: "Teclas", items: instruments.filter(i => i === "Teclas").length, icon: PiPianoKeysFill },
    { id: 7, name: "Madeira", items: instruments.filter(i => i === "Madeira").length, icon: TbWind },
    { id: 8, name: "Metais", items: instruments.filter(i => i === "Metais").length, icon: PiGuitar },
    { id: 9, name: "Áudio e acessórios", items: instruments.filter(i => i === "Áudio e acessórios").length, icon: LuMic },
];


type CategoriesProps = {
    onSelectCategory: (category: string) => void;
};

export default function Categories({ onSelectCategory }: CategoriesProps) {
    return (
        <section className="w-full flex flex-col border-b border-b-zinc-800 bg-zinc-950 px-6 py-10 md:py-12">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
                <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#3a2a4d]">
                            <GrGrid className="size-5 text-purple-400" aria-hidden />
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">Categorias</h2>
                            <p className="text-sm text-zinc-400">Navegue por tipo de instrumento</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-zinc-400 sm:shrink-0">
                        <HiOutlineFunnel className="size-4 text-zinc-300" aria-hidden />
                        <span>{catalogy.length} produtos</span>
                    </div>
                </div>

                <div
                    className="flex w-full list-none flex-wrap justify-start gap-4"
                    aria-label="Categorias de instrumentos"
                >
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const isActive = category.id === 1;

                        return (
                            <button
                                key={category.id}
                                onClick={() => {
                                    onSelectCategory(category.name)
                                }}
                                className={
                                    isActive
                                        ? "flex min-w-[200px] shrink-0 flex-col items-center gap-3 rounded-2xl bg-linear-to-br from-purple-600 via-purple-500 to-purple-500 px-5 py-6 text-white shadow-[0_16px_80px_-10px_rgba(217,70,239,0.55)] cursor-pointer"
                                        : "flex min-w-[200px] shrink-0 flex-col items-center gap-3 rounded-2xl bg-[#212126] px-5 py-6 transition-colors hover:bg-[#2a2a30] border border-transparent hover:border-purple-500 cursor-pointer"
                                }
                            >
                                <div
                                    className={
                                        isActive
                                            ? "flex h-12 w-12 items-center justify-center rounded-xl bg-white/20"
                                            : "flex h-12 w-12 items-center justify-center rounded-xl bg-[#3a2a4d]"
                                    }
                                >
                                    <Icon
                                        className={
                                            isActive ? "size-6 text-white" : "size-6 text-fuchsia-300"
                                        }
                                        aria-hidden
                                    />
                                </div>

                                <div className="flex flex-col items-center gap-1 text-center">
                                    <h3 className="text-base font-bold text-white">{category.name}</h3>
                                    <p
                                        className={
                                            isActive ? "text-sm text-white/90" : "text-sm text-zinc-400"
                                        }
                                    >
                                        {category.items} {category.items === 1 ? "item" : "itens"}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
