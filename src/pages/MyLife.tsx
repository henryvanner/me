import React from 'react'
import PageTitle from 'components/PageTitle'
import Timeline from 'components/Timeline'
import myLifeEvents from '../data/myLifeEvents.json'

const MyLife: React.FC = () => {
  return (
    <>
      <PageTitle>My Life</PageTitle>
      <Timeline events={ myLifeEvents.data }/>
    </>
  )
}

export default MyLife
