
export const SYMBOL_SUBSCRIBE = 'SYMBOL_SUBSCRIBE'
export const subscribeSymbol = (symbol) => ({
    type: SYMBOL_SUBSCRIBE,
    symbol
})


export const SYMBOL_UNSUBSCRIBE = 'SYMBOL_UNSUBSCRIBE'
export const unsubscibeSymbol = (symbol) => ({
    type: SYMBOL_UNSUBSCRIBE,
    symbol
})


export const subscribeSymbolThunk = symbol => (dispatch, _, feedAPI) => {
    feedAPI.subscribe(symbol)
    dispatch(subscribeSymbol(symbol))
}

export const unsubscribeSymbolThunk = symbol => (dispatch, _, feedAPI) => {
    feedAPI.unsubscribe(symbol)
    dispatch(unsubscibeSymbol(symbol))
}