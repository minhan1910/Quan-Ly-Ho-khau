import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './Reducers/UserReducer.jsx'
import { BrowserRouter } from 'react-router-dom'
import HouseholdReducer from './Reducers/HouseholdReducer.jsx'

const store = configureStore({
  reducer: {
    users: UserReducer,
    households: HouseholdReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
