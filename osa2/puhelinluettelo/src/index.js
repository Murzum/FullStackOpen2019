import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import './index.css'


const Index = () => {
  return (
    <div>
      <App />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
