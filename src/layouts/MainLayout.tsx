import React from 'react'
import Header from 'layouts/components/Header'
import 'styles/MainLayout.scss'

interface MainLayoutProps {
  fullWidthBody?: boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, fullWidthBody }) => {
  const bodyClassName = fullWidthBody ? 'mainLayout__body--full-width' : 'mainLayout__body'
  return (
    <>
      <a className='mainLayout__jumpToMainContent' href='#mainContent' tabIndex={ 0 }>to main content</a>
      <Header />
      <main className={ bodyClassName } id='mainContent'>
        { children }
      </main>
    </>
  )
}

export default MainLayout
