import {IAction, IAppState, TAppDispatchThunk} from 'store'
import {startFetching, stopFetching} from "actions/common";
import {chartAPI} from "../api/chart";

const MODULE_NAME = 'CHART'

export const SET_CHART_DATA = `${MODULE_NAME}/SET_CHART_DATA`
//export const SET_CHART_CURRENCY = `${MODULE_NAME}/SET_CHART_CURRENCY`


export const getChartData = (currencyID: number, startDate: string, endDate: string): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
    dispatch(startFetching())

    try {
        const response = await chartAPI.getChartData(currencyID, startDate, endDate)
    } catch (e) {
        console.log(e)
    }
    finally {
        dispatch(stopFetching())
    }
}

