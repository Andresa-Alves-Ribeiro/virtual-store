import { BiHeart, BiSearch } from "react-icons/bi";
import { FaMusic } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
    return (
        <div className="w-full dark:bg-black">
            <span className="bg-purple-700 w-full flex items-center justify-center text-sm p-2">
                🎵 Frete Grátis em compras acima de R$ 500 | Parcele em até 12x sem juros
            </span>

            <div className="p-4 flex justify-evenly items-center">
                <div className="flex gap-2">
                    <div className="bg-purple-600 px-3 py-2 flex items-center justify-center rounded-xl">
                        <FaMusic size={24} />
                    </div>

                    <div className="leading-none">
                        <h3 className="font-bold text-xl">MusicStore</h3>
                        <span className="text-purple-400 text-xs">Pro Audio & Instruments</span>
                    </div>
                </div>

                <div className="relative">
                    <BiSearch
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                    />

                    <input placeholder="Buscar instrumentos, marcas, modelos..."
                        className="border border-neutral-600 bg-neutral-800 rounded-md py-3 pr-3 pl-10 w-140" />
                </div>

                <div className="flex gap-3">
                    <button className="cursor-pointer flex gap-2 items-center text-sm px-3 rounded-xl bg-transparent hover:bg-neutral-900 transition-colors">
                        <BiHeart size={22} />
                    </button>

                    <button className="cursor-pointer flex gap-2 items-center border border-neutral-700 text-sm p-3 rounded-2xl bg-transparent hover:bg-neutral-900 transition-colors">
                        <FiUser />
                        Entrar
                    </button>

                    <button className="cursor-pointer flex gap-1 items-center bg-purple-600 p-3 rounded-xl font-bold">
                        <IoCartOutline size={22} />
                        Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}
