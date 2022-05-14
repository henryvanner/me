import { FC } from 'react'
import Timeline from 'components/Timeline'
import myLifeEventsData from '../data/myLifeEvents'
import Page from 'components/Page'

const MyLife: FC = () => {
  return (
    <Page title='My Life'>
      <Timeline events={ myLifeEventsData.data }/>
    </Page>
  )
}

export default MyLife
