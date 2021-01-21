import React, { Component } from 'react'
import { connect } from 'react-redux'

import HistoryTable from '../components/History/HistoryTable'
import * as actions from '../store/actions'

class History extends Component {
    componentDidMount() {
        this.props.onFetchHistory()
    }

    render() {
        return (
            <HistoryTable 
                history={this.props.history}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    history: state.history.history
})

const mapDispatchToProps = (dispatch) => ({
    onFetchHistory: () => dispatch(actions.fetchHistory())
})

export default connect(mapStateToProps, mapDispatchToProps)(History)