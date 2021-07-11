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
      <Header />
      <div className={ bodyClassName }>
        { children }
      </div>
    </>
  )
}

export default MainLayout
