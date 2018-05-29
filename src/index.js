import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'typeface-roboto'
import Router from './Router'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Router/>, document.getElementById('app'))
registerServiceWorker()
