"use client"

import { FaRegEnvelope } from "react-icons/fa";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { toast } from "sonner";

export default function ExclusiveOffers() {
    const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        const input = e.currentTarget.closest("form")?.querySelector("input");
        const email = input instanceof HTMLInputElement ? input.value : "";

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.success("Email cadastrado com sucesso! Verifique seu email.");
        } else {
            toast.error("Preencha um email válido!")
        }
    };

    return (
        <div className="bg-linear-to-br from-purple-900 via-purple-800 to-zinc-900 px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto w-full max-w-7xl">
                <div className="mb-8 text-center sm:mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                        <FaRegEnvelope color="dab2ff" size={24} />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-white sm:mb-3 sm:text-3xl md:text-4xl">
                        Receba Ofertas Exclusivas
                    </h2>
                    <p className="mb-6 text-base text-purple-200 sm:mb-8 sm:text-lg">
                        Cadastre-se e ganhe 10% de desconto na primeira compra + acesso antecipado a lançamentos
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <form className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
                        <input placeholder="seu@email.com"
                            className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all" />

                        <button type="button" onClick={sendEmail} className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-purple-100 transition-all hover:scale-105 active:scale-95 whitespace-nowrap">Inscrever-se</button>
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