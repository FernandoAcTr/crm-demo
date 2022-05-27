import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import { UIProvider } from './globals/context/UIProvider'

//PrimeReact
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'

//Boostrap
import 'bootstrap/dist/css/bootstrap.min.css'

//Global CSS
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UIProvider>
  </React.StrictMode>
)
