import Card from "../Card/Card";
import catalogy from "@/app/data/catalog";

type categorySelected = {
    category: string;
}

export default function Catalog({ category }: categorySelected) {
    const selectedCategory = !category || category === "Todos" ?
        catalogy
        :
        catalogy.filter((categoria) => categoria.instrument_type === category)

    return (
        <section id="catalog" className="w-full bg-zinc-900 px-6 py-10 md:px-10 md:py-12">
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

            <div className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {selectedCategory.map((instrument) => (
                    <Card destaque={false} key={instrument.id} id={instrument.id} imagem={instrument.image} brand={instrument.brand} title={instrument.name} description={instrument.description} stars={instrument.stars} oldPrice={instrument.old_price} newPrice={instrument.new_price} />
                ))}
            </div>
        </section>
    );
}
