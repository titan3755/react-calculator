import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './css/style.css'

const Main = (props) => {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  )
}

render(<Main />, document.getElementById('root'))

