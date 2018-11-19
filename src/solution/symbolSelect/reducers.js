import { SYMBOL_SUBSCRIBE, SYMBOL_UNSUBSCRIBE } from './actions'

const symbolSelectReducer = (state = {}, action) => {
    switch (action.type) {
        case SYMBOL_SUBSCRIBE:
            {
                return {
                    ...state,
                    ...state.subscribedSymbols,
                    [action.symbol]: true
                }
            }
        case SYMBOL_UNSUBSCRIBE:
            {
                const newState = { ...state, ...state.subscribedSymbols }
                delete newState[action.symbol]
                return newState
            }
        default: return state;
    }
}

export default symbolSelectReducer