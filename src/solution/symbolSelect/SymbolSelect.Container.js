import { connect } from 'react-redux'
import SymbolSelect from './SymbolSelect'
import { subscribeSymbolThunk } from './actions'

const mapDispatch = (dispatch) => ({
    subscribe: (symbol) => dispatch(subscribeSymbolThunk(symbol))
})

export default connect(null, mapDispatch)(SymbolSelect)