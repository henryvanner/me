import React from 'react'
import moment from 'moment'
import 'styles/Card.scss'

const DataSlice: React.FC<DataSlice> = ({ label, value }) => {
  return (
    <p className='dataSlice'>
      <label className='dataSlice__label'>{ label }</label>
      <span className='dataSlice__value'>{ value }</span>
    </p>
  )
}

const Card: React.FC<TimelineEvent> = ({ avatarImg, data = [], date, dateFormat = 'MMM DD YYYY', title }) => {
  const formattedDate = moment(date).format(dateFormat)

  return (
    <div className='card'>
      <div className='card__avatarSlot'>
        <img className='card__avatarImage' src={ avatarImg } />
      </div>
      <div className='card__contentSlot'>
        <h3 className='card__title'>{ title }</h3>
        <p className='card__date'>{ formattedDate }</p>
        <div>
          { data.map((dataSlice, index) => <DataSlice key={ index } { ...dataSlice } />) }
        </div>
      </div>
    </div>
  )
}

export default Card
