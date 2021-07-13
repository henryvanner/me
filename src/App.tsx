import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import MainLayout from 'layouts/MainLayout'
import MyLife from 'pages/MyLife'

const App: React.FC = () => {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/my-life' />
          </Route>
          <Route exact path='/my-life'>
            <MyLife />
          </Route>
          <Route exact path='/skills'>
            <h1>Hey this is in development. We will let you know when we are done! :)</h1>
          </Route>
        </Switch>
      </Router>
    </MainLayout>
  )
}

export default App
