import { updateCompanyQuote } from './companyQuote'
import { SYMBOL_SUBSCRIBE, SYMBOL_UNSUBSCRIBE } from './symbolSelect'
const feedMiddleware = (feedAPI) => ({ dispatch, getState }) => {

    const onData = (data) => {

        const { subscribedSymbols } = getState()
        if (data.symbol in subscribedSymbols) {
            return dispatch(updateCompanyQuote(data))
        }
    }

    feedAPI.onChange(onData)

    return next => action => {
        if (action.type === SYMBOL_SUBSCRIBE) {
            feedAPI.subscribe(action.symbol)
        }

        if (action.type === SYMBOL_UNSUBSCRIBE) {
            feedAPI.unsubscribe(action.symbol)
        }
        return next(action)
    }
}
export default feedMiddleware
