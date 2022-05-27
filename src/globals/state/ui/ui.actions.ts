import { ActionTypes } from './ui.types'

interface ToggleNavbar {
  type: ActionTypes.TOGGLE_DRAWER
}

export type Action = ToggleNavbar
