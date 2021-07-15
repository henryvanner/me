import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import MainLayout from 'layouts/MainLayout'
import MyLife from 'pages/MyLife'
import Skills from 'pages/Skills'

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/my-life' />
          </Route>
          <Route exact path='/my-life'>
            <MyLife />
          </Route>
          <Route exact path='/skills'>
            <Skills />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  )
}

export default App
