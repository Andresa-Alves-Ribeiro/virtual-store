import Card from "../Card/Card";
import catalogy from "@/app/data/catalog";

export default function Catalog() {
    return (
        <section className="w-full bg-zinc-900 px-6 py-10 md:px-10 md:py-12">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
                <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                        Catálogo Completo
                    </h2>
                    <p className="mt-2 text-sm text-zinc-400 md:text-base">
                        {catalogy.length} produtos disponíveis • Entrega para todo o Brasil
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {catalogy.map((instrument) => (
                    <Card destaque={false} key={instrument.id} imagem={instrument.image} brand={instrument.brand} title={instrument.name} description={instrument.description} avaliation={instrument.avaliation} oldPrice={instrument.old_price} newPrice={instrument.new_price} />
                ))}
            </div>
        </section>
    );
}
