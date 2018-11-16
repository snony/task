import { updateCompanyQuoteThunk } from './companyQuote'
const feedMiddleware = (feedAPI) => ({ dispatch, getState }) => {
    feedAPI.onChange((data) => dispatch(updateCompanyQuoteThunk(data)))
    return next => action => {
        //TODO remove this one
        if (typeof action === 'function') {
            return action(dispatch, getState, feedAPI)
        }
        if (action.type === 'SYMBOL_SUBSCRIBE') {
            console.log("susbcribe")

        }

        if (action.type === 'SYMBOL_UNSUBSCRIBE') {
            console.log("unsubscribe")
        }
        return next(action)
    }
}

export default feedMiddleware
