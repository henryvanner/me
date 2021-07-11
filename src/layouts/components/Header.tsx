import React, { useState } from 'react'
import 'styles/Header.scss'

const Header: React.FC = () => {
  const [navBarIsOpen, setNavBarIsOpen] = useState(true)
  const navBarClassName = navBarIsOpen ? 'navBar navBar--visible' : 'navBar'

  return (
    <header className='header'>
      <div className='appBar'>
        <span className='appBar__toggler' onClick={ () => setNavBarIsOpen(true) }>
          <i className='fas fa-bars fa-lg' />
        </span>
        <span className='appBar__title'></span>
      </div>
      <div className={ navBarClassName }>
        <div className='navBar__overlay' onClick={ () => setNavBarIsOpen(false) } />
        <div className='navBar__content'>
          <div className='navBarHeader'>
            <h3 className='navBarHeader__name'>Henry Aquino</h3>
            <span className='navBarHeader__email'>henry.vanner@gmail.com</span>
          </div>
          <nav>
            <ul className='siteNavMenu'>
              <li className='siteNavMenu__item siteNavMenu__item--selected'><a className='siteNavMenu__link' href='/my-life'>My Life</a></li>
              <li className='siteNavMenu__item'><a className='siteNavMenu__link' href='/my-experience'>Experience</a></li>
              <li className='siteNavMenu__item'><a className='siteNavMenu__link' href='/my-skills'>Skills</a></li>
            </ul>
          </nav>
          <nav>
            <ul className='socialNavMenu'>
              <li>
                <a className='socialNavMenu__link' href='https://github.com/henryvanner' rel='noreferrer' target='_blank'>
                  <i className='fab fa-github' />
                  <span className='socialMediaName'>Github</span>
                </a>
              </li>
              <li>
                <a className='socialNavMenu__link' href='https://www.linkedin.com/in/henryvanner/' rel='noreferrer' target='_blank'>
                  <i className='fab fa-linkedin-in' />
                  <span className='socialMediaName'>LinkedIn</span>
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
