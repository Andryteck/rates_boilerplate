import { connect, ConnectedProps } from 'react-redux'

import { IAppState } from 'store'
import Component from './Component'
import {getChartData} from "actions/chart";

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching,
  //currencyID: state.chart.currencyID,
  //startDate: state.chart.startDate,
  //endDate: state.chart.endDate,
})
const mapActionsToProps = (dispatch) => ({
  getChartData: (currencyID, startDate, endDate) => dispatch(getChartData(currencyID, startDate, endDate))
})


const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>
export default connector(Component)