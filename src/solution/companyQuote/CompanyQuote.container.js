import { connect } from 'react-redux'
import { unsubscribeSymbol } from '../symbolSelect'
import CompanyQuotes from './CompanyQuote'
import { removeQuote } from './actions'


export const mapState = ({ companyQuotes }) => ({
    companiesData: companyQuotes,
})


export const mapDispatch = (dispatch) => ({
    unsubscribe: (symbol) => dispatch(unsubscribeSymbol(symbol)),
    removeQuoteBySymbol: (symbol) => dispatch(removeQuote(symbol))
})

export default connect(mapState, mapDispatch)(CompanyQuotes)