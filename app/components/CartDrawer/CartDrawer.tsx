"use client";

import { useCartStore } from "@/app/store/useCartStore";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
    ArrowRight,
    Minus,
    Plus,
    ShieldCheck,
    ShoppingBag,
    ShoppingCart,
    Trash2,
    Truck,
    X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FREE_SHIPPING_THRESHOLD = 500;

function formatBRL(value: number) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

type CartDrawerProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    showTrigger?: boolean;
};

export function CartDrawer({
    open: openProp,
    onOpenChange,
    showTrigger = false,
}: CartDrawerProps) {
    const { items, removeItem, changeQty } = useCartStore();
    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const shippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
    const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const hasFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

    return (
        <Sheet open={openProp} onOpenChange={onOpenChange}>
            {showTrigger ? (
                <SheetTrigger
                    render={
                        <Button
                            variant="outline"
                            size="icon"
                            className="relative border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                        />
                    }
                >
                    <ShoppingCart className="h-5 w-5" />
                    {totalItems > 0 ? (
                        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 px-1 text-[10px] font-semibold text-white">
                            {totalItems}
                        </span>
                    ) : null}
                    <span className="sr-only">Abrir carrinho</span>
                </SheetTrigger>
            ) : null}

            <SheetContent
                showCloseButton={false}
                className={cn(
                    "flex w-full flex-col gap-0 border-l border-zinc-800 bg-zinc-950 p-0 text-zinc-100",
                    "shadow-2xl shadow-black/60 sm:max-w-md"
                )}
            >
                <SheetHeader className="shrink-0 space-y-0 border-b border-zinc-800 bg-zinc-900/90 px-6 py-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div
                                className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-purple-600 to-purple-500 shadow-lg shadow-purple-900/40"
                                aria-hidden
                            >
                                <ShoppingBag className="size-5 text-white" />
                            </div>
                            <div>
                                <SheetTitle className="text-lg font-semibold tracking-tight text-white">
                                    Seu carrinho
                                </SheetTitle>
                                <p className="mt-0.5 text-sm text-zinc-400">
                                    {totalItems === 0
                                        ? "Nenhum item adicionado"
                                        : `${totalItems} ${totalItems === 1 ? "item" : "itens"} no pedido`}
                                </p>
                            </div>
                        </div>
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon-sm"
                            onClick={() => onOpenChange?.(false)}
                            className="shrink-0 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                            aria-label="Fechar carrinho"
                        >
                            <X className="size-4" />
                        </Button>
                    </div>
                </SheetHeader>

                {items.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-16 text-center">
                        <div
                            className="flex size-20 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/80"
                            aria-hidden
                        >
                            <ShoppingCart className="size-10 text-zinc-600" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-base font-medium text-white">
                                Seu carrinho está vazio
                            </p>
                            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
                                Explore o catálogo e adicione instrumentos ao carrinho para
                                finalizar sua compra.
                            </p>
                        </div>
                        <Button
                            type="button"
                            onClick={() => onOpenChange?.(false)}
                            className="rounded-xl bg-linear-to-r from-purple-600 to-purple-500 px-6 font-semibold text-white shadow-lg shadow-purple-900/30 hover:brightness-110"
                        >
                            Explorar produtos
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="shrink-0 border-b border-zinc-800/80 bg-zinc-900/50 px-6 py-4">
                            <div className="flex items-center justify-between gap-2 text-xs">
                                <span className="flex items-center gap-1.5 font-medium text-zinc-300">
                                    <Truck className="size-3.5 text-purple-400" />
                                    {hasFreeShipping
                                        ? "Frete grátis liberado!"
                                        : `Faltam ${formatBRL(amountToFreeShipping)} para frete grátis`}
                                </span>
                                <span className="font-mono text-zinc-500">
                                    {formatBRL(FREE_SHIPPING_THRESHOLD)}
                                </span>
                            </div>
                            <progress
                                className={cn(
                                    "mt-2 h-1.5 w-full overflow-hidden rounded-full border-0 bg-zinc-800",
                                    "[&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-zinc-800",
                                    "[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-[width] motion-safe:[&::-webkit-progress-value]:transition-[width]",
                                    "[&::-moz-progress-bar]:rounded-full",
                                    hasFreeShipping
                                        ? "[&::-webkit-progress-value]:bg-emerald-500 [&::-moz-progress-bar]:bg-emerald-500"
                                        : "[&::-webkit-progress-value]:bg-linear-to-r [&::-webkit-progress-value]:from-purple-600 [&::-webkit-progress-value]:to-purple-400 [&::-moz-progress-bar]:bg-purple-500"
                                )}
                                value={shippingProgress}
                                max={100}
                                aria-label="Progresso para frete grátis"
                            />
                        </div>

                        <ul className="flex flex-1 flex-col gap-3 overflow-y-auto px-6 py-4">
                            {items.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 transition-colors hover:border-zinc-700"
                                >
                                    <div className="relative size-20 shrink-0 overflow-hidden rounded-lg border border-zinc-700/80 bg-zinc-800">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                    </div>

                                    <div className="flex min-w-0 flex-1 flex-col">
                                        <p className="line-clamp-2 text-sm font-medium leading-snug text-white">
                                            {item.name}
                                        </p>
                                        <p className="mt-1 text-xs text-zinc-500">
                                            {formatBRL(item.price)} cada
                                        </p>

                                        <div className="mt-3 flex items-center justify-between gap-2">
                                            <div className="flex items-center overflow-hidden rounded-lg border border-zinc-700 bg-zinc-950">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        changeQty(item.id, -1)
                                                    }
                                                    className="cursor-pointer flex size-9 items-center justify-center text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-purple-500"
                                                    aria-label="Diminuir quantidade"
                                                >
                                                    <Minus className="size-3.5" />
                                                </button>
                                                <span className="min-w-8 px-1 text-center text-sm font-medium tabular-nums text-white">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        changeQty(item.id, 1)
                                                    }
                                                    className="cursor-pointer flex size-9 items-center justify-center text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-purple-500"
                                                    aria-label="Aumentar quantidade"
                                                >
                                                    <Plus className="size-3.5" />
                                                </button>
                                            </div>

                                            <p className="shrink-0 text-sm font-semibold tabular-nums text-purple-400">
                                                {formatBRL(item.price * item.quantity)}
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => removeItem(item.id)}
                                            className="cursor-pointer mt-2 inline-flex w-fit items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500/50"
                                        >
                                            <Trash2 className="size-3.5" />
                                            Remover
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <footer className="shrink-0 border-t border-zinc-800 bg-zinc-900/95 px-6 py-5 backdrop-blur-sm">
                            <dl className="space-y-2 text-sm">
                                <div className="flex justify-between text-zinc-400">
                                    <dt>Subtotal</dt>
                                    <dd className="tabular-nums text-zinc-200">
                                        {formatBRL(subtotal)}
                                    </dd>
                                </div>
                                <div className="flex justify-between text-zinc-400">
                                    <dt>Frete estimado</dt>
                                    <dd
                                        className={cn(
                                            "font-medium",
                                            hasFreeShipping
                                                ? "text-emerald-400"
                                                : "text-zinc-500"
                                        )}
                                    >
                                        {hasFreeShipping ? "Grátis" : "Calculado no checkout"}
                                    </dd>
                                </div>
                            </dl>

                            <div className="my-4 flex justify-between border-t border-zinc-800 pt-4">
                                <span className="text-base font-semibold text-white">Total</span>
                                <span className="text-lg font-bold tabular-nums text-purple-400">
                                    {formatBRL(subtotal)}
                                </span>
                            </div>

                            <Button
                                className="h-11 w-full rounded-xl border-0 bg-linear-to-r from-purple-600 to-purple-500 text-base font-semibold text-white shadow-lg shadow-purple-900/35 hover:brightness-110"
                                size="lg"
                                render={<Link href="/checkout" />}
                            >
                                Finalizar compra
                                <ArrowRight className="size-4" />
                            </Button>

                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="cursor-pointer mt-2 w-full text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                                onClick={() => onOpenChange?.(false)}
                            >
                                Continuar comprando
                            </Button>

                            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-zinc-500">
                                <ShieldCheck className="size-3.5 text-purple-400" />
                                Compra segura · Parcelamento em até 12x
                            </p>
                        </footer>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
