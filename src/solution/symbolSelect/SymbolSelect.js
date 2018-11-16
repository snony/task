import React from 'react'
class SymbolSelect extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { symbol: '' }
    }

    handleOnChange = ({ target: { value } }) => {
        this.setState({ symbol: value })
    }

    subscribe = () => {
        this.props.subscribe(this.state.symbol);
    }

    render() {
        return (
            <div className='symbolSelect__container'>
                <input className='searchTerm' value={this.state.symbol} placeholder="Search...Symbol..." onChange={this.handleOnChange} />
                <button className='searchButton' onClick={this.subscribe}>Subscribe</button>
            </div>
        )
    }
}

export default SymbolSelect