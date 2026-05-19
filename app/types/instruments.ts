// app/types/instrument.ts
export interface Instrument {
    id: number;
    image: string;
    instrument_type: string;
    brand?: string;
    name: string;
    description: string;
    avaliation: number;
    old_price?: number;
    new_price: number;
}