import { FC, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import 'styles/Header.scss'

const appNavLinks = [
  { 'aria-label': 'Henry\'s life', text: 'My Life', to: '/my-life' },
  { 'aria-label': 'Henry\'s experience', text: 'Experience', to: '/experience' },
  { 'aria-label': 'Henry\'s skills', text: 'Skills', to: '/skills' },
]

const Header: FC = () => {
  const location = useLocation()
  const [navIsOpen, setNavIsOpen] = useState(false)
  const navClassName = navIsOpen ? 'nav nav--visible' : 'nav'

  function renderAppNav () {
    const navItems = appNavLinks.map((link, index) => {
      const { text, ...linkProps } = link
      const navItemIsSelected = link.to === location.pathname
      const navItemClassName = navItemIsSelected ? 'appNav__item appNav__item--selected' : 'appNav__item'
      const ariaCurrent = navItemIsSelected ? 'page' : false
      return (
        <li className={ navItemClassName } key={ index }>
          <Link aria-current={ ariaCurrent } className='appNav__link' onClick={ () => setNavIsOpen(false) } { ...linkProps }>{ text }</Link>
        </li>
      )
    })

    return (
      <nav aria-label='Main'>
        <ul className='appNav' role='presentation'>
          { navItems }
        </ul>
      </nav>
    )
  }

  return (
    <header className='header'>
      <div className='appBar'>
        <span className='appBar__toggler' onClick={ () => setNavIsOpen(true) }>
          <i className='fas fa-bars fa-lg' />
        </span>
        <span className='appBar__title'></span>
      </div>
      <div className={ navClassName }>
        <div className='nav__overlay' onClick={ () => setNavIsOpen(false) } />
        <div className='nav__content'>
          <div className='navHeader'>
            <h3 className='navHeader__name'>Henry Aquino</h3>
            <span className='navHeader__email'>henry.vanner@gmail.com</span>
          </div>
          { renderAppNav() }
          <nav aria-label='Social'>
            <ul className='socialNav' role='presentation'>
              <li>
                <a aria-label={ 'Visit henry\'s github page' } className='socialNav__link' href='https://github.com/henryvanner' rel='noreferrer' target='_blank'>
                  <i className='fab fa-github' />
                  <span className='socialNav__brandName'>Github</span>
                </a>
              </li>
              <li>
                <a aria-label={ 'Visit henry\'s linkedin profile' } className='socialNav__link' href='https://www.linkedin.com/in/henryvanner/' rel='noreferrer' target='_blank'>
                  <i className='fab fa-linkedin-in' />
                  <span className='socialNav__brandName'>LinkedIn</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
