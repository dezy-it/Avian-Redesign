import React from 'react'
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

const rootContainer: HTMLElement = document.getElementById('root')!;

// const root = ReactDOM.createRoot(rootContainer)

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    rootContainer
)