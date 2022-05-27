import { Dispatch } from 'redux'
import { ActionTypes } from './auth.types'
import { Action } from './auth.actions'
import { AuthServices } from '@services/index'

const doLogIn = (user: string, password: string) => async (dispatch: Dispatch<Action>) => {
  const resp = await AuthServices.login(user, password)
  dispatch({
    type: ActionTypes.LOGIN,
    payload: resp,
  })
}

export const authCreators = { doLogIn }
