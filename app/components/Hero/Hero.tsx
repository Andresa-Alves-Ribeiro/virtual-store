"use client";

import { AiOutlineSafety } from "react-icons/ai";
import { FaGuitar, FaHeadphones, FaMicrophone, FaRegCreditCard } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdLockOutline } from "react-icons/md";

const glassBase =
    "rounded-2xl border border-white/15 bg-white/[0.08] shadow-lg shadow-black/20 backdrop-blur-xl";
const glassCardLg = `${glassBase} p-5 md:p-6`;
const glassCardSm = `${glassBase} p-4 text-center sm:p-5`;

function scrollToCatalog() {
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
    return (
        <>
            <section className="relative isolate flex min-h-[min(85vh,900px)] w-full items-center overflow-hidden bg-[#120A1A] py-16 md:py-24">
                <div
                    className="absolute inset-0 -z-20 scale-105 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/store.png')" }}
                    aria-hidden
                />
                <div
                    className="absolute inset-0 -z-10 bg-linear-to-br from-[#1a0a2e]/95 via-[#0f0518]/92 to-black/90"
                    aria-hidden
                />
                <div className="absolute inset-0 -z-10 bg-purple-950/40 mix-blend-multiply" aria-hidden />

                <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
                        <div className="flex max-w-3xl flex-col items-start text-left">
                            <h1 className="font-sans text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                <span className="block">
                                    Sua{" "}
                                    <span className="bg-linear-to-r from-[#F36FD7] via-[#D85AF2] to-[#9B2CF3] bg-clip-text text-transparent">
                                        Música
                                    </span>
                                </span>
                                <span className="block">Merece o</span>
                                <span className="block">Melhor</span>
                            </h1>

                            <p className="mb-10 mt-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                                Instrumentos musicais profissionais das melhores marcas do mundo. Parcelamento em até 12x
                                sem juros e frete grátis acima de R$ 500.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <button
                                    type="button"
                                    onClick={scrollToCatalog}
                                    className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-linear-to-r from-[#7c3aed] to-[#a855f7] px-6 py-3.5 text-base font-semibold text-white shadow-[0_0_28px_-4px_rgba(124,58,237,0.5)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A855F7]"
                                >
                                    Explorar Produtos
                                    <IoMdArrowForward className="text-xl" aria-hidden />
                                </button>
                            </div>

                            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm font-medium text-zinc-500 md:gap-x-14">
                                <span className="inline-flex items-center gap-2">
                                    <FaGuitar className="text-lg text-[#C084FC]" aria-hidden />
                                    Cordas
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <FaMicrophone className="text-lg text-[#C084FC]" aria-hidden />
                                    Sopro
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <FaHeadphones className="text-lg text-[#C084FC]" aria-hidden />
                                    Acessórios
                                </span>
                            </div>
                        </div>

                        <div className="mx-auto flex w-full max-w-md flex-col gap-4 lg:mx-0 lg:ml-auto lg:max-w-none lg:pl-4">
                            <div className={glassCardLg}>
                                <p className="bg-linear-to-r from-[#A855F7] via-[#C084FC] to-white bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl text-center">
                                    500+
                                </p>
                                <p className="mt-2 text-sm font-medium text-white/90 md:text-base text-center">Produtos Premium</p>
                            </div>
                            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                <div className={glassCardSm}>
                                    <p className="text-2xl font-bold text-[#C084FC] sm:text-3xl">10</p>
                                    <p className="mt-1 text-xs font-medium text-white/90 sm:text-sm">Anos</p>
                                </div>
                                <div className={glassCardSm}>
                                    <p className="text-2xl font-bold text-[#C084FC] sm:text-3xl">50k+</p>
                                    <p className="mt-1 text-xs font-medium text-white/90 sm:text-sm">Clientes</p>
                                </div>
                                <div className={glassCardSm}>
                                    <p className="text-2xl font-bold text-[#C084FC] sm:text-3xl">4.9★</p>
                                    <p className="mt-1 text-xs font-medium text-white/90 sm:text-sm">Avaliação</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center gap-14 border-t border-b border-t-purple-800 border-b-zinc-700 bg-zinc-900 p-3 text-sm">
                <div className="flex items-center gap-2">
                    <AiOutlineSafety size={20} color="#00c951" />

                    <p className="text-zinc-400">Compra 100% Segura</p>
                </div>

                <div className="flex items-center gap-2">
                    <LiaCertificateSolid size={22} color="#f0b100" />

                    <p className="text-zinc-400">Loja Certificada</p>
                </div>

                <div className="flex items-center gap-2">
                    <FiTruck size={20} color="#2b7fff" />

                    <p className="text-zinc-400">Entrega Rastreável</p>
                </div>

                <div className="flex items-center gap-2">
                    <MdLockOutline size={22} color="#ad46ff" />

                    <p className="text-zinc-400">Dados Protegidos SSL</p>
                </div>
            </section>

            <section className="bg-zinc-950! flex justify-evenly p-10 border-b border-b-zinc-800">
                <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-[#9810fa]/35 p-3">
                        <FiTruck size={24} color="#c27aff" />
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-white">Frete Grátis</h3>
                        <p className="text-zinc-400 text-sm">Em compras acima de R$ 500</p>
                    </div>
                </div>

                <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-[#9810fa]/35 p-3">
                        <AiOutlineSafety size={24} color="#c27aff" />
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-white">Garantia Estendida</h3>
                        <p className="text-zinc-400 text-sm">2 anos em todos os produtos</p>
                    </div>
                </div>

                <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-[#9810fa]/35 p-3">
                        <FaRegCreditCard size={24} color="#c27aff" />
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-white">Parcelamento</h3>
                        <p className="text-zinc-400 text-sm">Em até 12x sem juros</p>
                    </div>
                </div>

                <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-[#9810fa]/35 p-3">
                        <FaHeadphones size={24} color="#c27aff" />
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-white">Suporte 24/7</h3>
                        <p className="text-zinc-400 text-sm">Atendimento especializado</p>
                    </div>
                </div>
            </section>
        </>
    );
}
