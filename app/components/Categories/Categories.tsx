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

const TOTAL_PRODUCTS = 18;

const categories: CategoriesType[] = [
    { id: 1, name: "Todos", items: 18, icon: GrGrid },
    { id: 2, name: "Cordas", items: 5, icon: PiGuitar },
    { id: 3, name: "Percussão", items: 3, icon: BsMusicNoteBeamed },
    { id: 4, name: "Teclas", items: 2, icon: PiPianoKeysFill },
    { id: 5, name: "Sopro", items: 3, icon: TbWind },
    { id: 6, name: "Áudio Pro", items: 1, icon: LuMic },
];

export default function Categories() {
    return (
        <section className="w-full border-b border-b-neutral-800 bg-[#0d0d12] px-6 py-10 md:py-12">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
                <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#3a2a4d]">
                            <GrGrid className="size-5 text-white" aria-hidden />
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">Categorias</h2>
                            <p className="text-sm text-neutral-400">Navegue por tipo de instrumento</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-neutral-400 sm:shrink-0">
                        <HiOutlineFunnel className="size-4 text-neutral-300" aria-hidden />
                        <span>{TOTAL_PRODUCTS} produtos</span>
                    </div>
                </div>

                <ul
                    className="flex w-full list-none flex-nowrap gap-4 overflow-x-auto pb-2 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    aria-label="Categorias de instrumentos"
                >
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const isActive = category.id === 1;

                        return (
                            <li
                                key={category.id}
                                className={
                                    isActive
                                        ? "flex min-w-[200px] shrink-0 flex-col items-center gap-3 rounded-2xl bg-linear-to-br from-purple-600 via-purple-500 to-purple-500 px-5 py-6 text-white shadow-[0_16px_40px_-10px_rgba(217,70,239,0.55)]"
                                        : "flex min-w-[200px] shrink-0 flex-col items-center gap-3 rounded-2xl bg-[#212126] px-5 py-6 transition-colors hover:bg-[#2a2a30] border border-transparent hover:border-purple-500"
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
                                            isActive ? "text-sm text-white/90" : "text-sm text-neutral-400"
                                        }
                                    >
                                        {category.items} {category.items === 1 ? "item" : "itens"}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
