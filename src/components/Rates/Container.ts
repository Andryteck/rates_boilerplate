import {connect, ConnectedProps} from 'react-redux'

import {IAppState} from 'store'
import Component from './Component'
import {getChartData, setChartCurrency} from "actions/chart";
import {ChartType} from "../../api/chart";

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching,
    currencyId: state.chart.currencyId,
    startDate: state.chart.startDate,
    endDate: state.chart.endDate,
    currencies: state.chart.currencies,
    chartDate: state.chart.chartData.map((i: ChartType) => (new Date(i.Date)).getTime()),
    chartRate: state.chart.chartData.map((i: ChartType) => i.Cur_OfficialRate)
})
const mapActionsToProps = (dispatch) => ({
    getChartData: (currencyId) => dispatch(getChartData(currencyId)),
    setChartCurrency: (currencyId) => dispatch(setChartCurrency(currencyId))
})


const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(Component)