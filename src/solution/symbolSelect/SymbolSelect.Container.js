import { connect } from 'react-redux'
import SymbolSelect from './SymbolSelect'
import { subscribeSymbol } from './actions'

const mapDispatch = (dispatch) => ({
    subscribe: (symbol) => dispatch(subscribeSymbol(symbol))
})

export default connect(null, mapDispatch)(SymbolSelect)