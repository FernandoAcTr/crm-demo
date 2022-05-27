import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

//Reducers
import auth from '@globals/state/auth/auth.reducer'
import ui from '@globals/state/ui/ui.reducer'

const reducer = combineReducers({
  auth,
  ui,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware().concat(createLogger()).concat(thunk)],
})

export type State = ReturnType<typeof reducer>
