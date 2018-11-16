import { updateCompanyQuoteThunk } from './companyQuote'
const feedMiddleware = (socketAPI) => ({ dispatch, getState }) => {
    socketAPI.onChange((data) => dispatch(updateCompanyQuoteThunk(data)))
    return next => action => {
        //TODO change this one
        if (typeof action === 'function') {
            return action(dispatch, getState, socketAPI)
        }
        return next(action)
    }
}

export default feedMiddleware
