import Image from "next/image"
import { FaQuoteRight, FaStar } from "react-icons/fa"

type ReviewsType = {
    stars: number,
    comment: string,
    photo: string,
    name: string,
    profession: string
}

const reviews: ReviewsType[] = [
    { stars: 5, comment: "Melhor loja de instrumentos que já comprei. Produto original, entrega rápida e suporte excepcional!", name: "João Silva", profession: "Guitarrista Profissional", photo: "https://i.pravatar.cc/150?img=12" },
    { stars: 5, comment: "Comprei meu piano digital aqui e não poderia estar mais satisfeita. Qualidade impecável e preço justo.", name: "Maria Santos", profession: "Professora de Piano", photo: "https://i.pravatar.cc/150?img=45" },
    { stars: 5, comment: "Atendimento personalizado e produtos de primeira linha. Sempre recomendo para meus alunos!", name: "Carlos Mendes", profession: "Baterista", photo: "https://i.pravatar.cc/150?img=33" }
]

export default function CustomersReview() {
    return (
        <div className="bg-linear-to-br from-zinc-900 via-zinc-950 to-zinc-900 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">O Que Nossos Clientes Dizem</h2>
                    <p className="text-zinc-400 text-lg">Avaliação média: <span>4.9/5</span> baseado em 2.847 avaliações</p>
                </div>

                <div className="flex gap-3">
                {reviews.map((review, index) => (
                        <div key={index} className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                            <div>
                                <FaQuoteRight color="ad46ff" className="mb-4" size={36} />

                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex gap-0.5" aria-label={`Avaliação ${review.stars} de 5`}>
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <FaStar
                                                key={i}
                                                className={
                                                    i < Math.round(review.stars)
                                                        ? "size-4 text-yellow-400"
                                                        : "size-4 text-zinc-600"
                                                }
                                                aria-hidden
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-zinc-300 mb-6 leading-relaxed">{review.comment}</p>

                            <div className="flex items-center gap-4">
                                <Image src={review.photo} alt="Imagem do avaliador" width={100} height={100} className="w-14 h-14 rounded-full border-2 border-purple-500/30" />

                                <div>
                                    <h4 className="font-bold text-white">{review.name}</h4>
                                    <p className="text-sm text-zinc-400">{review.profession}</p>
                                </div>
                            </div>
                        </div>
                ))}
                </div>
            </div>
        </div>
    )
}