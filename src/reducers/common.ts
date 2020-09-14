import { AnyAction } from 'redux'
import {
  START_FETCHING,
  STOP_FETCHING,
} from 'actions/common'

const initState = {
  fetching: false,
}

export interface ICommonState {
  fetching: boolean
}

function commonReducer(state: ICommonState = initState, { type, payload = null }: AnyAction):ICommonState {
  switch (type) {
    case START_FETCHING: {
      return {
        ...state, fetching: true,
      }
    }
    case STOP_FETCHING: {
      return {
        ...state, fetching: false,
      }
    }
    default:
      return state
  }
}

export default commonReducer
