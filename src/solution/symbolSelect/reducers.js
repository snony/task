import { SYMBOL_SUBSCRIBE, SYMBOL_UNSUBSCRIBE } from './actions'
const initState = {}

const symbolReducer = (state = initState, action) => {
    switch (action.type) {
        case SYMBOL_SUBSCRIBE:
            {
                const subscribedSymbols = { ...state.subscribedSymbols, [action.symbol]: true }
                return { ...state, subscribedSymbols }
            }
        case SYMBOL_UNSUBSCRIBE:
            {
                const subscribedSymbols = { ...state.subscribedSymbols }
                delete subscribedSymbols[action.symbol]
                return { ...state, subscribedSymbols }
            }
        default: return state;
    }
}

export default symbolReducer