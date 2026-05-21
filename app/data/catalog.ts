import { Instrument } from "../types/instruments";

const catalogy: Instrument[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=500&h=500&fit=crop",
        instrument_type: "Cordas tangidas",
        brand: "Fender",
        name: "American Professional II Stratocaster",
        description:
            "Guitarra elétrica com captadores V-Mod II, braço em maple e tremolo de duas pontas",
        stars: 5,
        new_price: 15499,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500&h=500&fit=crop",
        instrument_type: "Percussão rítmica",
        brand: "Yamaha",
        name: "Stage Custom Birch 5 Peças",
        description:
            "Bateria acústica com cascos em birch, ferragens em die-cast e pratos incluídos no kit",
        stars: 5,
        new_price: 5999,
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1771209195708-f547e3649ae8?w=500&h=500&fit=crop",
        instrument_type: "Teclas",
        brand: "Roland",
        name: "FP-30X Piano Digital",
        description:
            "Piano digital com 88 teclas PHA-4 Standard, Bluetooth e sons SuperNATURAL",
        stars: 5,
        new_price: 4699,
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&h=500&fit=crop",
        instrument_type: "Cordas tangidas",
        brand: "Takamine",
        name: "GD11CE-NS Violão Folk Eletro",
        description:
            "Violão dreadnought com tampo em spruce, pré-amplificador TP-4T e afinador embutido",
        stars: 5,
        new_price: 2899,
    },
    {
        id: 5,
        image: "https://static.wixstatic.com/media/21feb7_08ccce50efd34cefb5298086353fe4fd~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/21feb7_08ccce50efd34cefb5298086353fe4fd~mv2.png",
        instrument_type: "Cordas tangidas",
        brand: "Fender",
        name: "Player Precision Bass PF",
        description:
            "Baixo elétrico de 4 cordas com captadores split single-coil e escala de 34 polegadas",
        stars: 5,
        new_price: 6299,
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=500&h=500&fit=crop",
        instrument_type: "Cordas tangidas",
        brand: "Gibson",
        name: "Les Paul Studio",
        description:
            "Guitarra elétrica com corpo em mogno, braço em maple e captadores Burstbucker",
        stars: 5,
        new_price: 14999,
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=500&h=500&fit=crop",
        instrument_type: "Cordas tangidas",
        brand: "Cordoba",
        name: "C5-CE Violão Clássico Eletro",
        description:
            "Violão clássico com tampo em cedro canadense, cordas de náilon e pré Fishman Sonitone",
        stars: 4,
        new_price: 2199,
    },
    {
        id: 8,
        image: "https://m.media-amazon.com/images/I/6170bf4SvvL.jpg",
        instrument_type: "Cordas tangidas",
        brand: "Kala",
        name: "Ukulele Soprano Kala KA-15S",
        description:
            "Ukulele soprano com corpo em mogno, escala de 13,6 polegadas e acabamento acetinado",
        stars: 4,
        new_price: 449,
    },
    {
        id: 9,
        image: "https://www.drumshop.com.br/loja/images/temp/458_11929.png",
        instrument_type: "Percussão rítmica",
        brand: "Pearl",
        name: "Export EXX725SP Bateria",
        description:
            "Kit de bateria com 5 peças em poplar, ferragens 830 e pratos Sabian SBR incluídos",
        stars: 5,
        new_price: 4899,
    },
    {
        id: 10,
        image: "https://http2.mlstatic.com/D_NQ_NP_799733-MLB83589292423_042025-O-meinl-percussion-headliner-series-snare-cajon-maple.webp",
        instrument_type: "Percussão rítmica",
        brand: "Meinl",
        name: "Meinl Percussion Headliner Series Snare Cajon",
        description:
            "Cajón em birch com superfície de batemento ajustável e som grave definido",
        stars: 4,
        new_price: 899,
    },
    {
        id: 11,
        image: "https://m.media-amazon.com/images/I/71EBOIw+n3L._AC_UF894,1000_QL80_.jpg",
        instrument_type: "Percussão rítmica",
        brand: "Roland",
        name: "TD-07KV Bateria Eletrônica",
        description:
            "Bateria eletrônica com módulo TD-07, pads mesh e 25 kits prontos para estúdio",
        stars: 5,
        new_price: 7499,
    },
    {
        id: 12,
        image: "https://www.recmusicpy.com/img/1/1384/produtos/540/e576a3fd355d953f9ce6f50cfb08f6a8.jpg",
        instrument_type: "Teclas",
        brand: "Korg",
        name: "Korg Minilogue xd",
        description:
            "Sintetizador analógico híbrido com 37 teclas, sequenciador de 16 passos e efeitos digitais",
        stars: 5,
        new_price: 4299,
    },
    {
        id: 13,
        image: "https://m.media-amazon.com/images/I/51t8P2+kwiL.jpg",
        instrument_type: "Teclas",
        brand: "Yamaha",
        name: "P-125 Piano Digital",
        description:
            "Piano compacto com 88 teclas GHS, 24 vozes e conexão USB para gravação",
        stars: 4,
        new_price: 3899,
    },
    {
        id: 14,
        image: "https://m.media-amazon.com/images/I/815SmeouYfL.jpg",
        instrument_type: "Madeira",
        brand: "Yamaha",
        name: "Saxofone Alto Yamaha YAS 280",
        description:
            "Saxofone alto em latão com chaves Power-forged e acabamento para estudantes avançados",
        stars: 5,
        new_price: 5499,
    },
    {
        id: 15,
        image: "https://m.media-amazon.com/images/I/717B2yDZlgL.jpg",
        instrument_type: "Metais",
        brand: "Yamaha",
        name: "Trompete Yamaha YTR 2330",
        description:
            "Trompete em latão amarelo com monel pistons e campânula de 4,8 polegadas",
        stars: 4,
        new_price: 3299,
    },
    {
        id: 16,
        image: "https://http2.mlstatic.com/D_NQ_NP_651083-MLB106918938595_022026-O.webp",
        instrument_type: "Madeira",
        brand: "Gemeinhardt",
        name: "Flauta Transversal Gemeinhardt 2SP",
        description:
            "Flauta transversal em níquel prateado com chaves fechadas e headjoint de resposta rápida",
        stars: 4,
        new_price: 1899,
    },
    {
        id: 17,
        image: "https://http2.mlstatic.com/D_NQ_NP_605121-MLA100018736003_122025-O.webp",
        instrument_type: "Madeira",
        brand: "Hohner",
        name: "Gaita Hohner Marine Band 1896 C",
        description:
            "Gaita diatônica em madeira com 20 vozes e afinação Richter para blues e folk",
        stars: 4,
        new_price: 480,
    },
    {
        id: 18,
        image: "https://studiocentermusic.com.br/wp-content/uploads/2020/04/6d6050f61961c26adef745f0654accc6.png",
        instrument_type: "Áudio e acessórios",
        brand: "Shure",
        name: "Microfone Shure SM58-LC",
        description:
            "Microfone cardioide para voz ao vivo com padrão polar consistente e construção robusta",
        stars: 5,
        new_price: 1199,
    },
    {
        id: 19,
        image: "https://cdn.awsli.com.br/600x450/451/451842/produto/135401380/5577b029aa.jpg",
        instrument_type: "Áudio e acessórios",
        brand: "Focusrite",
        name: "Interface de Áudio Usb Focusrite Scarlett 2i2 3 Geração c",
        description:
            "Interface de áudio USB com 2 entradas combo, pré-amps Scarlett e latência ultra baixa",
        stars: 5,
        new_price: 1199,
    },
    {
        id: 20,
        image: "https://m.media-amazon.com/images/I/71JlgP1p-FL.jpg",
        instrument_type: "Cordas de arco",
        brand: "Eagle",
        name: "Violino 4/4 Eagle VE441",
        description:
            "Violino elétrico com corpo em resina, equalizador embutido e saída para fones",
        stars: 4,
        new_price: 4599,
    },
];

export default catalogy;