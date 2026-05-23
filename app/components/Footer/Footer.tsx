import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaRegEnvelope, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { RiMapPinLine } from "react-icons/ri";

export default function Footer() {
    return (
        <div className="bg-zinc-950 border-t border-zinc-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <IoMusicalNotesOutline color="ad46ff" size={32} />

                            <span className="text-xl font-bold text-white">MusicStore Pro</span>
                        </div>

                        <p className="text-zinc-400 mb-4">Sua loja especializada em instrumentos musicais profissionais desde 2014.</p>

                        <div className="flex gap-3">
                            <Link href="#" className="w-10 h-10 bg-zinc-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors">
                                <FaInstagram size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-zinc-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors">
                                <FaFacebookF size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-zinc-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors">
                                <FaYoutube size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-zinc-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors">
                                <FaTwitter size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4 text-lg!">Categorias</h3>

                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Cordas de arco</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Cordas tangidas</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Percussão melódica</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Percussão ritmica</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Teclas</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Madeira</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Metais</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Áudio e acessórios</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4 text-lg!">Institucional</h3>

                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Sobre Nós</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Política de Privacidade</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Termos de Uso</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Trocas e Devoluções</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-zinc-400 hover:text-purple-400 transition-colors">Trabalhe Conosco</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4 text-lg!">Contato</h3>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-zinc-400">
                                <RiMapPinLine size={22} color="c27aff" />

                                <span className="text-sm">
                                    Av. Paulista, 1000
                                    <br></br>
                                    São Paulo - SP
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400">
                                <FaPhoneAlt size={16} color="c27aff" />

                                <span className="text-sm">
                                    (11) 98765-0000
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400">
                                <FaRegEnvelope size={16} color="c27aff" />

                                <span className="text-sm">
                                    contato@musicstore.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-800 w-full">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-zinc-500 text-sm text-center md:text-left">© 2026 MusicStore. Todos os direitos reservados.</p>

                        <div className="flex items-center gap-4">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="logo mastercard" width={40} height={40} className="h-6 opacity-50 hover:opacity-100 transition-opacity" />
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg" alt="logo mastercard" width={44} height={44} className="h-6 opacity-50 hover:opacity-100 transition-opacity" />
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="logo mastercard" width={80} height={80} className="h-6 opacity-50 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}