import { FaRegEnvelope } from "react-icons/fa";
import { IoMusicalNotesOutline } from "react-icons/io5";

export default function ExclusiveOffers() {
    return (
        <div className="bg-linear-to-br from-purple-900 via-purple-800 to-zinc-900 py-16">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                        <FaRegEnvelope color="dab2ff" size={24} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Receba Ofertas Exclusivas</h2>
                    <p className="text-lg text-purple-200 mb-8">Cadastre-se e ganhe 10% de desconto na primeira compra + acesso antecipado a lançamentos</p>
                </div>

                <div className="flex flex-col gap-3">
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input placeholder="seu@email.com"
                            className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all" />

                        <button className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-purple-100 transition-all hover:scale-105 active:scale-95 whitespace-nowrap">Inscrever-se</button>
                    </form>

                    <div className="flex items-center justify-center gap-2 mt-6 text-purple-300 text-sm">
                        <IoMusicalNotesOutline />

                        <span>Junte-se a mais de 50.000 músicos</span>
                    </div>
                </div>
            </div>
        </div>
    )
}