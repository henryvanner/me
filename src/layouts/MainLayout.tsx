import { FC } from 'react'
import Header from 'layouts/components/Header'
import Footer from './components/Footer'
import 'styles/MainLayout.scss'

interface MainLayoutProps {
  fullWidthBody?: boolean
}

const MainLayout: FC<MainLayoutProps> = ({ children, fullWidthBody }) => {
  const bodyClassName = fullWidthBody ? 'mainLayout__body--full-width' : 'mainLayout__body'
  return (
    <>
      <a className='mainLayout__jumpToMainContent' href='#mainContent' tabIndex={ 0 }>to main content</a>
      <div className='mainLayout__container'>
        <Header />
        <main className={ bodyClassName } id='mainContent'>
          { children }
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
