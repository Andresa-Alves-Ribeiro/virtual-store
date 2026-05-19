import { BiSolidZap } from "react-icons/bi";
import Card from "../Card/Card";
import weeklyHighlights from "@/app/data/weekly-highlights";

export default function MostSearched() {
    return (
        <section className="w-full bg-zinc-900 px-6 py-10 md:px-10 md:py-12">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
                <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                        Destaques da Semana
                    </h2>
                    <p className="mt-2 text-sm text-zinc-400 md:text-base">
                        Os instrumentos mais procurados pelos músicos profissionais
                    </p>
                </div>

                <BiSolidZap className="text-3xl text-yellow-400 md:text-4xl" aria-hidden />
            </div>

            <div className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {weeklyHighlights.map((instrument) => (
                    <Card key={instrument.id} id={instrument.id} imagem={instrument.image} type={instrument.instrument_type} title={instrument.name} description={instrument.description} stars={instrument.stars} oldPrice={instrument.old_price} newPrice={instrument.new_price} />
                ))}
            </div>
        </section>
    );
}
