export const QUOTE_UPDATE = 'QUOTE_UPDATE'
export const updateCompanyQuote = quote => ({
    type: QUOTE_UPDATE,
    quote
})


export const QUOTE_REMOVE = 'QUOTE_REMOVE'
export const removeQuote = (symbol) => ({
    type: QUOTE_REMOVE,
    symbol
})
