import { Action } from './ui.actions'
import { ActionTypes } from './ui.types'

interface UIState {
  isSidebarCollapsed: boolean
}

const initialState: UIState = {
  isSidebarCollapsed: false,
}

const reducer = (state: UIState = initialState, action: Action): UIState => {
  switch (action.type) {
    case ActionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        isSidebarCollapsed: !state.isSidebarCollapsed,
      }

    default:
      return state
  }
}

export default reducer
