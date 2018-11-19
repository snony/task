import { QUOTE_UPDATE, QUOTE_REMOVE } from './actions'
const companyQuoteReducer = (state = {}, action) => {
    switch (action.type) {
        case QUOTE_UPDATE: {
            const newState = { ...state, ...state.companyQuotes, [action.quote.symbol]: action.quote }
            return newState
        }
        case QUOTE_REMOVE: {
            const newState = { ...state, ...state.companyQuotes }
            delete newState[action.symbol]
            return newState
        }
        default: return state
    }
}

export default companyQuoteReducer