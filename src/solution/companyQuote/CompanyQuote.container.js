import { connect } from 'react-redux'
import { unsubscibeSymbol } from '../symbolSelect'
import CompanyQuotes from './CompanyQuote'
import { removeQuote } from './actions'


export const mapState = (state) => ({
    companiesData: state.companyQuotes,
})


export const mapDispatch = (dispatch) => ({
    unsubscribe: (symbol) => dispatch(unsubscibeSymbol(symbol)),
    removeCompany: (symbol) => dispatch(removeQuote(symbol))
})

export default connect(mapState, mapDispatch)(CompanyQuotes)