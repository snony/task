import {QUOTE_UPDATE, updateCompanyQuote, QUOTE_REMOVE, removeQuote} from '../actions'
describe('action', ()=>{
    const symbol = 'MCD'
    it("removeQuoteAction should return QUOTE_REMOVE action", ()=>{
        const expectedAction = {type:QUOTE_REMOVE, symbol}  
        expect(removeQuote(symbol)).toEqual(expectedAction)
    })

    it("updateCompanyQuote should return QUOTE_UPDATE action", ()=>{
        const expectedAction = {type:QUOTE_UPDATE, quote:{}}
        expect(updateCompanyQuote({})).toEqual(expectedAction)
    })

})