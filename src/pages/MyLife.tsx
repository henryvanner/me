import React from 'react'
import Timeline from 'components/Timeline'
import myLifeEvents from '../data/myLifeEvents.json'
import Page from 'components/Page'

const MyLife: React.FC = () => {
  return (
    <Page title='My Life'>
      <Timeline events={ myLifeEvents.data }/>
    </Page>
  )
}

export default MyLife
