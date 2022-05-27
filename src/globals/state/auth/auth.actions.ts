import { AuthServices } from '@src/src/services'
import { ActionTypes } from './auth.types'

interface LoginAction {
  type: ActionTypes.LOGIN
  payload: { email: string; user: string }
}

interface LogoutAction {
  type: ActionTypes.LOGOUT
}

export type Action = LoginAction | LogoutAction
