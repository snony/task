import React from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';


const columnDefs = [
    { headerName: 'Symbol', field: 'symbol', width: 250 },
    { headerName: 'Open', field: 'open', width: 250 },
    { headerName: 'Last', field: 'last', width: 250 },
    { headerName: 'High', field: 'high', width: 250 },
    { headerName: 'Low', field: 'low', width: 250 },
    {
        headerName: 'Change', field: 'change', valueParser: parseInt, cellClassRules: {
            "cell-green": "x >=0",
            "cell-red": "x < 0"
        }
    },
    { headerName: 'Action', cellRenderer: 'buttonCellRenderer', width: 250 }
]

class ButtonCellRenderer extends React.Component {

    unsubscribeCompany = () => {
        const { unsubscribe } = this.props.context
        unsubscribe(this.props.data.symbol)
    }
    render() {
        return (
            <button className='searchButton' onClick={this.unsubscribeCompany}>Unsubscribe</button>
        )
    }
}
class CompaniesQuote extends React.PureComponent {
    constructor(props) {
        super(props)
        this.unsubscribe = this.unsubscribe.bind(this)
    }

    unsubscribe = (symbol) => {
        const { unsubscribe, removeQuoteBySymbol } = this.props;
        unsubscribe(symbol)
        removeQuoteBySymbol(symbol)
    }

    render() {
        const companiesData = this.props.companiesData
        return (
            <div className='grid_wrapper'>
                <div style={{ height: '100%', width: '90%' }} className='ag-theme-balham-dark move'>
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={companiesData ? Object.values(companiesData) : []}
                        context={{ unsubscribe: this.unsubscribe }}
                        frameworkComponents={{ buttonCellRenderer: ButtonCellRenderer }}
                    >
                    </AgGridReact>
                </div>
            </div >

        )
    }
}

export default CompaniesQuote