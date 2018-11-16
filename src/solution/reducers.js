import { combineReducers } from 'redux'
import { symbolReducer } from './symbolSelect'
import { companyQuoteReducer } from './companyQuote'

export default combineReducers({
    symbolsSubscriber: symbolReducer,
    companyQuotes: companyQuoteReducer
})