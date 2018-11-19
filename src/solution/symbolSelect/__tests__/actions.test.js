import { SYMBOL_SUBSCRIBE, subscribeSymbol, SYMBOL_UNSUBSCRIBE, unsubscribeSymbol } from '../actions'
describe('SymbolSelect actions', () => {
    const symbol = 'aapl'

    it('subscribeSymbol should return SYMBOL_SUBSCRIBE action', () => {
        const expectedAction = { type: SYMBOL_SUBSCRIBE, symbol }
        expect(subscribeSymbol(symbol)).toEqual(expectedAction)
    })

    it('unsubscribeSymbol should return SYMBOL_UNSUBSCRIBE', () => {
        expect(unsubscribeSymbol(symbol)).toEqual({ type: SYMBOL_UNSUBSCRIBE, symbol })
    })
})