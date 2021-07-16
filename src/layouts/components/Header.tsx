import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import 'styles/Header.scss'

const appNavRoutes = [
  { text: 'My Life', to: '/my-life' },
  { text: 'Experience', to: '/experience' },
  { text: 'Skills', to: '/skills' },
]

const Header: React.FC = () => {
  const location = useLocation()
  const [navIsOpen, setNavIsOpen] = useState(false)
  const navClassName = navIsOpen ? 'nav nav--visible' : 'nav'

  function renderAppNav () {
    const navItems = appNavRoutes.map((route, index) => {
      const navItemIsSelected = route.to === location.pathname
      const navItemClassName = navItemIsSelected ? 'appNav__item appNav__item--selected' : 'appNav__item'
      return (
        <li className={ navItemClassName } key={ index }>
          <Link className='appNav__link' onClick={ () => setNavIsOpen(false) } to={ route.to }>{ route.text }</Link>
        </li>
      )
    })

    return (
      <nav>
        <ul className='appNav'>
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
          <nav>
            <ul className='socialNav'>
              <li>
                <a className='socialNav__link' href='https://github.com/henryvanner' rel='noreferrer' target='_blank'>
                  <i className='fab fa-github' />
                  <span className='socialNav__brandName'>Github</span>
                </a>
              </li>
              <li>
                <a className='socialNav__link' href='https://www.linkedin.com/in/henryvanner/' rel='noreferrer' target='_blank'>
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
