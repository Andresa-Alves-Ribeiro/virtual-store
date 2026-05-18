const brands = [
    { name: "Fender", color: "#ff4d4d" },
    { name: "Yamaha", color: "#d633ff" },
    { name: "Roland", color: "#3399ff" },
    { name: "Marshall", color: "#ffff00" },
    { name: "Korg", color: "#00ff00" },
    { name: "Shure", color: "#ff3399" },
    { name: "Pearl", color: "#00ffff" },
    { name: "Boss", color: "#ff9900" },
] as const;

export default function OficialBrands() {
    return (
        <section className="flex w-full flex-col items-center border-b border-b-neutral-800 bg-[#121214] px-6 py-10 md:py-12">
            <h2 className="mb-8 text-center text-2xl font-bold text-white md:mb-10 md:text-3xl">
                Marcas Oficiais
            </h2>

            <div className="mx-auto flex w-full max-w-7xl flex-nowrap justify-center gap-3 overflow-x-auto pb-1 md:gap-4 lg:overflow-x-visible">
                {brands.map((brand) => (
                    <div
                        key={brand.name}
                        className="flex min-w-30 shrink-0 items-center justify-center rounded-lg bg-[#2a2a2e] px-5 py-4 sm:min-w-[8.5rem] sm:px-6 sm:py-5"
                    >
                        <span
                            className="text-center text-base font-bold sm:text-lg"
                            style={{ color: brand.color }}
                        >
                            {brand.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
