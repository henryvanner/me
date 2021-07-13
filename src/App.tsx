import React from 'react'
import Timeline from 'components/Timeline'
import PageTitle from 'components/PageTitle'
import MainLayout from 'layouts/MainLayout'
import myLifeEvents from './data/myLifeEvents.json'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainLayout>
            <PageTitle>My Life</PageTitle>
            <Timeline events={ myLifeEvents.data }/>
          </MainLayout>
        </Route>
        <Route exact path='/skills'>
          <h1>Hey this is in development. We will let you know when we are done! :)</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
