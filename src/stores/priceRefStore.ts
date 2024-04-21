import { create } from 'zustand'

interface PriceRefState {
    priceRef: String
}

export const usePriceRefState = create<PriceRefState>()((set) => ({
    priceRef: "USD",
    setPriceRef:(p:string)=>set({priceRef:p})
}));