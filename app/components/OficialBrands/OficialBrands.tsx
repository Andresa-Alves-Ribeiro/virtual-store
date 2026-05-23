import catalogy from "@/app/data/catalog";

const brands = [
    ...new Set(
        catalogy
            .map((product) => product.brand)
            .filter((brand): brand is string => brand !== undefined),
    ),
];

const palette = [
    "#ff4d4d",
    "#d633ff",
    "#3399ff",
    "#ffff00",
    "#00ff00",
    "#ff3399",
    "#00ffff",
    "#ff9900",
    "#ffffff",
    "#9b59b6",
    "#e67e22",
    "#2ed573",
    "#6c5ce7",
] as const;

function BrandCard({ name, color }: { name: string; color: string }) {
    return (
        <div className="group flex min-w-30 shrink-0 items-center justify-center rounded-lg border border-transparent bg-zinc-700/60 px-4 py-3 transition-colors hover:border-zinc-600 sm:min-w-34 sm:px-6 sm:py-5">
            <span className="text-center text-base! font-bold transition-transform group-hover:scale-105 sm:text-lg" style={{ color }}>
                {name}
            </span>
        </div>
    );
}

function BrandList({
    items,
    hiddenFromAssistiveTech,
}: {
    items: string[];
    hiddenFromAssistiveTech?: boolean;
}) {
    return (
        <ul
            className="m-0 flex shrink-0 list-none flex-nowrap gap-3 p-0 md:gap-4"
            aria-hidden={hiddenFromAssistiveTech ? true : undefined}
        >
            {items.map((brand, index) => {
                const color = palette[index % palette.length];

                return (
                    <li key={hiddenFromAssistiveTech ? `mirror-${brand}` : brand}>
                        <BrandCard name={brand} color={color} />
                    </li>
                )
            })}
        </ul>
    );
}

export default function OficialBrands() {
    return (
        <section
            aria-labelledby="oficial-brands-heading"
            className="flex w-full flex-col items-center border-b border-b-zinc-800 bg-zinc-950 px-4 py-8 sm:px-6 sm:py-10 md:py-12"
        >
            <h2
                id="oficial-brands-heading"
                className="mb-8 text-center text-2xl font-bold text-white md:mb-10 md:text-3xl"
            >
                Marcas Oficiais
            </h2>

            <div className="brand-marquee-viewport relative w-full overflow-hidden">
                <div className="brand-marquee-track flex w-max flex-nowrap gap-3 animate-brand-marquee md:gap-4">
                    <BrandList items={brands} />
                    <BrandList items={brands} hiddenFromAssistiveTech />
                </div>
            </div>
        </section>
    );
}
