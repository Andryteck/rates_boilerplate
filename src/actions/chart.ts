import {IAction, IAppState, TAppDispatchThunk} from 'store'
import {startFetching, stopFetching} from "actions/common";
import {chartAPI, ChartType} from "../api/chart";
import * as dateFns from "date-fns";

const MODULE_NAME = 'CHART'

export const SET_CHART_DATA = `${MODULE_NAME}/SET_CHART_DATA`
export const SET_CHART_CURRENCY = `${MODULE_NAME}/SET_CHART_CURRENCY`

export const endDate = new Date()
export const startDate = dateFns.addDays(endDate, -6)

export const getChartData = (currencyId: number): any => async (dispatch: TAppDispatchThunk<never>, getState: () => IAppState): Promise<void> => {
    dispatch(startFetching())

    try {
        const response = await chartAPI.getChartData(currencyId, dateFns.format(startDate, 'MM/dd/yyyy'), dateFns.format(endDate, 'MM/dd/yyyy'))

        dispatch(setChartData(response.data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(stopFetching())
    }
}

export const setChartData = (chartData: ChartType[]): any => async (dispatch: TAppDispatchThunk<{chartData: ChartType[]}>): Promise<void> => {
    dispatch({
        type: SET_CHART_DATA,
        payload: {
            chartData
        }
    })
}

export const setChartCurrency = (currencyId: number): any => async (dispatch: TAppDispatchThunk<{ currencyId: number }>): Promise<void> => {

    dispatch({
        type: SET_CHART_CURRENCY,
        payload: {
            currencyId
        }
    })
}




