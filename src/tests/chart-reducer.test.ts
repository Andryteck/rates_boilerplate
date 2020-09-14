import chartReducer, {IChartState} from "reducers/chart";
import dateFns from "date-fns";
import {endDate, SET_CHART_CURRENCY, startDate} from "actions/chart";

let startState

beforeEach(() => {
    startState = {
        currencyId: 145,
        startDate: dateFns.format(startDate, 'MM/dd/yyyy'),
        endDate: dateFns.format(endDate, 'MM/dd/yyyy'),
        chartData: [],
        currencies: [{label: 'USD', value: 145}, {label: 'EUR', value: 292}, {label: 'RUB', value: 298}],
    }
})

test('correct currency should be added', () => {
    const action = {
        type: SET_CHART_CURRENCY,
        payload: {
            currencyId: 292
        }
    }
    const endState = chartReducer(startState, action)

    expect(endState.currencyId).toBe(292 | 145 | 298)

})




