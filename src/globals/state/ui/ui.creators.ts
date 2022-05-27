import { Dispatch } from 'redux'
import { Action } from './ui.actions'
import { ActionTypes } from './ui.types'

export const toggleSidebar = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypes.TOGGLE_DRAWER,
  })
}
