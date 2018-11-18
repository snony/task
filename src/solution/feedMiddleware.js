import { updateCompanyQuote } from './companyQuote'
const feedMiddleware = (feedAPI) => ({ dispatch, getState }) => {
    feedAPI.onChange(callBack(dispatch, getState))
    return next => action => {
        if (action.type === 'SYMBOL_SUBSCRIBE') {
            feedAPI.subscribe(action.symbol)
        }
        
        if (action.type === 'SYMBOL_UNSUBSCRIBE') {
            feedAPI.unsubscribe(action.symbol)
        }
        return next(action)
    }
}
    
const callBack = (dispatch,getState) =>{
    return (data) =>{
        const { symbolsSubscriber: { subscribedSymbols } } = getState()
        if (data.symbol in subscribedSymbols) {
            dispatch(updateCompanyQuote(data))
            return dispatch(updateCompanyQuote(data))
        }   
    }
}

export default feedMiddleware
