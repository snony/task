import companyQuoteReducer from '../reducers'
describe('reducer', ()=>{
    it('should return initial state', ()=>{
        expect(companyQuoteReducer({},{})).toEqual({})
    })

    it('should handle quote update action', ()=>{
        expect(1).toBe(1)
    })

    it('should handle quote remove action', ()=>{
        expect(1).toBe(1)
    })
    
})