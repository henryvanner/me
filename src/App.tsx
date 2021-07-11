import React from 'react'
import Timeline from 'components/Timeline'
import PageTitle from 'components/PageTitle'
import myLifeEvents from './data/myLifeEvents.json'
import MainLayout from 'layouts/MainLayout'

const App: React.FC = () => {
  return (
    <MainLayout>
      <PageTitle>My Life</PageTitle>
      <Timeline events={ myLifeEvents.data }/>
    </MainLayout>
  )
}

export default App
