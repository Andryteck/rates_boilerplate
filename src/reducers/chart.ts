import {AnyAction} from 'redux'
import {SET_CHART_DATA} from "actions/chart";


const initState = {
    currencyID: 145,
    startDate: '',
    endDate: '',
    data: []
}

export interface IChartState {
    currencyID: number,
    startDate: string,
    endDate: string,
    data: Array<number>
}

function chartReducer(state: IChartState = initState, {type, payload = null}: AnyAction) {
    switch (type) {
        case SET_CHART_DATA: {
            return {
                ...state,
                data: payload.data
            }
        }
        default:
            return state
    }
}

export default chartReducer
