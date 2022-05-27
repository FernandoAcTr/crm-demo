import { Dispatch } from 'redux'
import { Action } from './ui.actions'
import { ActionTypes } from './ui.types'

const toggleSidebar = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypes.TOGGLE_DRAWER,
  })
}

export const uiCreators = { toggleSidebar }
