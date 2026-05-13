import Image from "next/image";
import { FaBolt, FaShoppingCart, FaStar } from "react-icons/fa";

type CardProps = {
    imagem: string;
    type: string;
    title: string;
    description: string;
    avaliation: number;
    oldPrice?: number;
    newPrice: number;
    destaque?: boolean;
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
    avaliation,
    oldPrice,
    newPrice,
    destaque = true,
}: CardProps) {
    const ratingDisplay = avaliation.toFixed(1);

    return (
        <article className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border border-neutral-500 bg-[#1a1a1c] shadow-lg">
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

            <div className="flex flex-1 flex-col gap-3 p-4 pt-4">
                <span className="text-sm font-semibold text-purple-400">{type}</span>

                <h3 className="text-xl font-bold leading-tight text-white">{title}</h3>

                <p className="line-clamp-3 text-sm leading-relaxed text-neutral-400">{description}</p>

                <div className="flex items-center gap-2">
                    <div className="flex gap-0.5" aria-label={`Avaliação ${ratingDisplay} de 5`}>
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                                key={i}
                                className={
                                    i < Math.round(avaliation)
                                        ? "size-4 text-yellow-400"
                                        : "size-4 text-neutral-600"
                                }
                                aria-hidden
                            />
                        ))}
                    </div>
                    <span className="text-sm text-white">({ratingDisplay})</span>
                </div>

                <div className="mt-auto flex items-end justify-between gap-3 pt-1">
                    <div className="flex min-w-0 flex-col gap-0.5">
                        {oldPrice != null ? (
                            <span className="text-sm text-neutral-500 line-through">
                                {formatBRL(oldPrice)}
                            </span>
                        ) : null}
                        <span className="text-2xl font-bold text-purple-400">{formatBRL(newPrice)}</span>
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
