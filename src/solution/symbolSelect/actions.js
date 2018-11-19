
export const SYMBOL_SUBSCRIBE = 'SYMBOL_SUBSCRIBE'
export const subscribeSymbol = (symbol) => ({
    type: SYMBOL_SUBSCRIBE,
    symbol
})


export const SYMBOL_UNSUBSCRIBE = 'SYMBOL_UNSUBSCRIBE'
export const unsubscribeSymbol = (symbol) => ({
    type: SYMBOL_UNSUBSCRIBE,
    symbol
})