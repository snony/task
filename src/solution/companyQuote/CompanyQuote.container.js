import { connect } from 'react-redux'
import { unsubscribeSymbolThunk } from '../symbolSelect'
import CompanyQuotes from './CompanyQuote'
import { removeQuote } from './actions'


export const mapState = (state) => ({
    companiesData: state.companyQuotes,
    symbols: state.symbolsSubscriber
})


export const mapDispatch = (dispatch) => ({
    unsubscribe: (symbol) => dispatch(unsubscribeSymbolThunk(symbol)),
    removeCompany: (symbol) => dispatch(removeQuote(symbol))
})

export default connect(mapState, mapDispatch)(CompanyQuotes)