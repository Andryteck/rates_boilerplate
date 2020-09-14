import {AnyAction} from 'redux'
import {endDate, SET_CHART_CURRENCY, SET_CHART_DATA, startDate} from "actions/chart";
import * as dateFns from "date-fns";
import {ChartType} from "../api/chart";


const initState = {
    currencyId: 145,
    startDate: dateFns.format(startDate, 'MM/dd/yyyy'),
    endDate: dateFns.format(endDate, 'MM/dd/yyyy'),
    chartData: [],
    currencies: [{label: 'USD', value: 145}, {label: 'EUR', value: 292}, {label: 'RUB', value: 298}]
}

interface ICurrencies {
    label: string,
    value: number
}

export interface IChartState {
    currencyId: number,
    startDate: string,
    endDate: string,
    chartData: ChartType[],
    currencies: ICurrencies[],
}

function chartReducer(state: IChartState = initState, {type, payload = null}: AnyAction): IChartState {
    switch (type) {
        case SET_CHART_DATA: {
            return {
                ...state,
                chartData: payload.chartData
            }
        }
        case SET_CHART_CURRENCY: {
            return {
                ...state,
                currencyId: payload.currencyId
            }
        }
        default:
            return state
    }
}

export default chartReducer
