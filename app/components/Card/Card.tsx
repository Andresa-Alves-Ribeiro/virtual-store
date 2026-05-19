import Image from "next/image";
import { FaBolt, FaShoppingCart, FaStar } from "react-icons/fa";

type CardProps = {
    imagem: string;
    type?: string;
    title: string;
    description: string;
    stars: number;
    oldPrice?: number;
    newPrice: number;
    destaque?: boolean;
    brand?: string;
};

function formatBRL(value: number) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}

export default function Card({
    imagem,
    type,
    title,
    description,
    stars,
    oldPrice,
    newPrice,
    brand,
    destaque = true,
}: CardProps) {
    const ratingDisplay = stars.toFixed(1);

    const dividedPrice = formatBRL(newPrice / 12);

    return (
        <article className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border border-zinc-500 bg-zinc-800/60 shadow-lg">
            <div className="relative aspect-square w-full shrink-0">
                <Image
                    src={imagem}
                    alt={`Imagem do instrumento ${title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 420px"
                />
                {destaque ? (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-yellow-400 px-2.5 py-1 text-xs font-bold tracking-wide text-black">
                        <FaBolt className="size-3 shrink-0" aria-hidden />
                        DESTAQUE
                    </span>
                ) : null}
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
                <span className="text-sm font-semibold text-purple-400">{type}</span>

                <span className="text-sm font-semibold text-purple-400">{brand}</span>

                <h3 className="text-xl font-bold leading-tight text-white">{title}</h3>

                <p className="text-sm leading-relaxed text-zinc-400 line-clamp-2">{description}</p>

                <div className="flex items-center gap-2">
                    <div className="flex gap-0.5" aria-label={`Avaliação ${ratingDisplay} de 5`}>
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                                key={i}
                                className={
                                    i < Math.round(stars)
                                        ? "size-4 text-yellow-400"
                                        : "size-4 text-zinc-600"
                                }
                                aria-hidden
                            />
                        ))}
                    </div>
                    <span className="text-sm text-white">({ratingDisplay})</span>
                </div>

                <div className="mt-auto flex items-end justify-between gap-3 pt-1">
                    <div className="flex min-w-0 flex-col gap-0.5">
                        {oldPrice == null ? null : (
                            <span className="text-sm text-zinc-500 line-through">
                                {formatBRL(oldPrice)}
                            </span>
                        )}
                        <span className="text-2xl font-bold text-purple-400">{formatBRL(newPrice)}</span>
                        <p className="text-xs text-zinc-500">ou 12x sem juros de {dividedPrice}</p>
                    </div>

                    <button
                        type="button"
                        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-purple-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-purple-500/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                    >
                        <FaShoppingCart className="size-4 shrink-0" aria-hidden />
                        Comprar
                    </button>
                </div>
            </div>
        </article>
    );
}
