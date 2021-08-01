import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

test('App renders correctly', () => {
  // Set up the DOM correctly for the test
  document.body.innerHTML = `
    <div id='root'>
      <span className='appBar__title'></span>
    </div>
  `

  const div = document.getElementById('root')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
