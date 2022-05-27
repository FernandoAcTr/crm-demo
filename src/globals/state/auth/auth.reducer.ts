import { createSlice } from '@reduxjs/toolkit'
import { ActionTypes } from './auth.types'
import { Action } from './auth.actions'

interface AuthState {
  isLoggedIn: boolean
  user: { email: string; user: string }
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: { email: '', user: '' },
}

const reducer = (state: AuthState = initialState, action: Action): AuthState => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: { email: action.payload.email, user: action.payload.user },
      }

    case ActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: { email: '', user: '' },
      }

    default:
      return state
  }
}

export default reducer
