import {connect, ConnectedProps} from 'react-redux'

import {IAppState} from 'store'
import Component from './Component'
import {getChartData} from "actions/chart";

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching,
    currencyId: state.chart.currencyId,
    startDate: state.chart.startDate,
    endDate: state.chart.endDate,
    currencies: state.chart.currencies
    //currencyRate: state.chart.chartData
})
const mapActionsToProps = (dispatch) => ({
    getChartData: (currencyId) => dispatch(getChartData(currencyId))
})


const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(Component)