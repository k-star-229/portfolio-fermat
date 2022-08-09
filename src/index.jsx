// React Required
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

// Create Import File
import './index.css'

import LandingPage from './LandingPage'
import * as serviceWorker from './serviceWorker'

const Root = () => {
  return <LandingPage />
}

ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.register()
