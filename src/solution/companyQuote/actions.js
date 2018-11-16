

export const QUOTE_UPDATE = 'QUOTE_UPDATE'
export const updateCompanyQuote = quote => ({
    type: QUOTE_UPDATE,
    quote
})

export const updateCompanyQuoteThunk = (quote) => (dispatch, getState, _) => {
    const { symbolsSubscriber: { subscribedSymbols } } = getState()
    if (quote.symbol in subscribedSymbols) {
        return dispatch(updateCompanyQuote(quote))
    }
}

export const QUOTE_REMOVE = 'QUOTE_REMOVE'
export const removeQuote = (symbol) => ({
    type: QUOTE_REMOVE,
    symbol
})
//TODO change the name of this one!
export const callBack = dispatch => quote => {
    dispatch(updateCompanyQuoteThunk(quote))
}