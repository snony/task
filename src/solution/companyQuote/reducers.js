import { QUOTE_UPDATE, QUOTE_REMOVE } from './actions'
const initState = {}
const companyQuoteReducer = (state = initState, action) => {
    switch (action.type) {
        case QUOTE_UPDATE: {
            const companiesData = { ...state.companiesData, [action.quote.symbol]: action.quote }
            return { ...state, companiesData }
        }
        case QUOTE_REMOVE: {
            const companiesData = { ...state.companiesData }
            delete companiesData[action.symbol]
            return { ...state, companiesData }
        }
        default: return state
    }
}

export default companyQuoteReducer