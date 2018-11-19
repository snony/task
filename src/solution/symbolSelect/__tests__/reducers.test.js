import symbolSelectReducer from '../reducers'
import { subscribeSymbol, unsubscribeSymbol } from '../actions'
describe('SymbolSelect Reducer', () => {
    const symbol = 'MCD'
    it('should return initial state', () => {
        expect(symbolSelectReducer({}, {})).toEqual({})
    })

    it('should handle SYMBOL_SUBSCRIBE action', () => {
        const expectedState = { subscribedSymbols: { [symbol]: true } }
        expect(symbolSelectReducer({}, subscribeSymbol(symbol))).toEqual(expectedState)
    })

    it('should handle SYMBOL_UNSUBSCRIBE action', () => {
        const expectedState = { subscribedSymbols: {} }
        expect(symbolSelectReducer({ subscribedSymbols: { [symbol]: true } }, unsubscribeSymbol(symbol))).toEqual(expectedState)
    })
})