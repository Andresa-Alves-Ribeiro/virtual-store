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
        instrument_type: "Percussão ritmica",
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
        id: 5,
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
        id: 6,
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
        id: 7,
        image: "https://www.drumshop.com.br/loja/images/temp/458_11929.png",
        instrument_type: "Percussão ritmica",
        brand: "Pearl",
        name: "Export EXX725SP Bateria",
        description:
            "Kit de bateria com 5 peças em poplar, ferragens 830 e pratos Sabian SBR incluídos",
        stars: 5,
        new_price: 4899,
    },
    {
        id: 8,
        image: "https://http2.mlstatic.com/D_NQ_NP_799733-MLB83589292423_042025-O-meinl-percussion-headliner-series-snare-cajon-maple.webp",
        instrument_type: "Percussão ritmica",
        brand: "Meinl",
        name: "Meinl Percussion Headliner Series Snare Cajon",
        description:
            "Cajón em birch com superfície de batemento ajustável e som grave definido",
        stars: 4,
        new_price: 899,
    },
    {
        id: 9,
        image: "https://m.media-amazon.com/images/I/71EBOIw+n3L._AC_UF894,1000_QL80_.jpg",
        instrument_type: "Percussão ritmica",
        brand: "Roland",
        name: "TD-07KV Bateria Eletrônica",
        description:
            "Bateria eletrônica com módulo TD-07, pads mesh e 25 kits prontos para estúdio",
        stars: 5,
        new_price: 7499,
    },
    {
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
        image: "https://m.media-amazon.com/images/I/71JlgP1p-FL.jpg",
        instrument_type: "Cordas de arco",
        brand: "Eagle",
        name: "Violino 4/4 Eagle VE441",
        description:
            "Violino elétrico com corpo em resina, equalizador embutido e saída para fones",
        stars: 4,
        new_price: 4599,
    },
    {
        id: 19,
        image: "https://m.media-amazon.com/images/I/71G5OkSr2zL.jpg",
        instrument_type: "Áudio e acessórios",
        brand: "Audio-Technica",
        name: "Fone de Ouvido Audio Technica ATH-M50x",
        description:
            "Fone fechado com drivers de 45 mm, resposta 15 Hz–28 kHz, cabo destacável e dobrável para estúdio e DJ",
        stars: 5,
        new_price: 1399,
    },
    {
        id: 20,
        image: "https://m.media-amazon.com/images/I/71KNvsZYwQL._AC_UF1000,1000_QL80_.jpg",
        instrument_type: "Percussão melódica",
        brand: "Adams",
        name: "Xilofone Glockenspiel dobrável de 30 notas",
        description:
            "Xilofone de concerto com barras em padauk, estrutura em alumínio e suporte com rodízios",
        stars: 4,
        new_price: 599,
    },
    {
        id: 21,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_790405-MLA103157409549_122025-F.webp",
        instrument_type: "Áudio e acessórios",
        brand: "Santo Angelo",
        name: "Cabo para Instrumento Monster Cable Prolink 3,6m",
        description:
            "Cabo P10 mono blindado com trança em nylon, conectores banhados a ouro e 3,6m para guitarra e baixo",
        stars: 5,
        new_price: 429,
    },
    {
        id: 22,
        image: "https://http2.mlstatic.com/D_Q_NP_651001-MLA78710334353_082024-O.webp",
        instrument_type: "Cordas de arco",
        brand: "Yamaha",
        name: "Violoncelo 4/4 Yamaha VC5S",
        description:
            "Violoncelo acústico com tampo em spruce, costado e fundo em maple e espelho em ébano para estudantes e orquestra",
        stars: 5,
        new_price: 5899,
    },
    {
        id: 23,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_812212-MLU79191169363_092024-F.webp",
        instrument_type: "Cordas de arco",
        brand: "Giannini",
        name: "Viola Caipira Elétrica Giannini VS14 EQ 10 Cordas Fosco Natural",
        description:
            "Viola acústica com tampo e faixa e fundo em Linden, esta viola oferece um som rico e uma ressonância impressionante.",
        stars: 5,
        new_price: 899,
    },
    {
        id: 24,
        image: "https://m.media-amazon.com/images/I/51jxOWpDl6L._AC_SX679_.jpg",
        instrument_type: "Metais",
        brand: "Zellmer",
        name: "Trombone de Pisto Longo Zellmer ZSL-800LN Afinação Bb (Sib)",
        description:
            "Trombone tenor em latão amarelo com slide cromado, bocal 48L e resposta equilibrada para banda e jazz",
        stars: 5,
        new_price: 3299,
    },
    {
        id: 25,
        image: "https://http2.mlstatic.com/D_Q_NP_2X_830009-MLB105434130141_012026-P.webp",
        instrument_type: "Metais",
        brand: "Jupiter",
        name: "Tuba HARMONICS Bb 4/4 4 Rotores HBB-200L Laqueado",
        description:
            "A Tuba HBB-200L é uma excelente escolha para aqueles que exigem um som de tuba em Bb de alta qualidade e que ainda precisam considerar seus orçamentos. Ela oferece um timbre forte, é fácil de tocar e tem entonação precisa, características presentes nos instrumentos Harmonics",
        stars: 4,
        new_price: 12499,
    },
    {
        id: 27,
        image: "https://m.media-amazon.com/images/I/51O21eHI0mL._AC_SX679_.jpg",
        instrument_type: "Percussão melódica",
        brand: "ENNBOM",
        name: "ENNBOM Instrumento de percussão vibrafone com xilofone dobrável Glockenspiel com 30 notas",
        description:
            "Vibrafone de 2,5 oitavas com barras em alumínio, motor de tremolo e pedal de sustain para jazz e estúdio",
        stars: 5,
        new_price: 1699,
    }
];

export default catalogy;