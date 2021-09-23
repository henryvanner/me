import { FC } from 'react'
import Card from 'components/Card'
import 'styles/Timeline.scss'

interface TimelineEventProps {
  left?:  boolean,
  start?: boolean
}

interface TimelineProps {
  events: TimelineEvent []
}

const TimelineEvent: FC<TimelineEventProps> = ({ children, left, start }) => {
  const timelineDotClassName = start ? 'timeline__dot timeline__dot--top' : 'timeline__dot'
  const timelineEventClassName = left ? 'timeline__event timeline__event--left' : 'timeline__event'

  return (
    <div className={ timelineEventClassName }>
      <div className='timeline__line'>
        <div className={ timelineDotClassName }/>
      </div>
      <div className='timeline__card-slot'>
        { children }
      </div>
    </div>
  )
}

const Timeline: FC<TimelineProps> = ({ events }) => {
  const timelineEvents = events.map((event, index) => {
    const left = index % 2 !== 0
    const start = index === 0

    return (
      <TimelineEvent key={ index } left={ left } start={ start }>
        <Card { ...event } />
      </TimelineEvent>
    )
  })

  return <div className='timeline__slot'>{ timelineEvents }</div>
}

export default Timeline
