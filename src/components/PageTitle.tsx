import { FC, useEffect } from 'react'

const PageTitle: FC = ({ children }) => {
  useEffect(() => {
    const headerTitle = document.getElementsByClassName('appBar__title')[0]
    headerTitle.textContent = children as string
    return () => {
      headerTitle.textContent = ''
    }
  }, [])

  return <h1 className='page__title'>{ children }</h1>
}

export default PageTitle
