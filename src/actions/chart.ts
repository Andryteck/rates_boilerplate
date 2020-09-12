import { IAction, IAppState, TAppDispatchThunk } from 'store'

const MODULE_NAME = 'CURRENCY'

export const GET_CURRENCY = `${MODULE_NAME}/GET_CURRENCY`


export const getCurrency = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
    dispatch({
        type: GET_CURRENCY,
    })
}

