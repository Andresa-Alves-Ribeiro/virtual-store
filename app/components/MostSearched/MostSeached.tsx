import { BiSolidZap } from "react-icons/bi";

export default function MostSearched() {
    return (
        <section className="w-full bg-neutral-900 px-6 py-10 md:px-10 md:py-12">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
                <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                        Destaques da Semana
                    </h2>
                    <p className="mt-2 text-sm text-neutral-400 md:text-base">
                        Os instrumentos mais procurados pelos músicos profissionais
                    </p>
                </div>

                <BiSolidZap className="text-3xl text-yellow-400 md:text-4xl" aria-hidden />
            </div>

            <div></div>
        </section>
    );
}
