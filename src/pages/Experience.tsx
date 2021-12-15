import { FC } from 'react'
import Page from 'components/Page'

const Link: FC<{ href: string }> = (props) => <a { ...props } className='page__link' rel='noreferrer' target='_blank' />

const gis = <Link href='https://www.esri.cl/es-cl/que-es-el-gis/que-es-gis'>GIS</Link>
const expressjs = <Link href='http://expressjs.com/'>Express JS</Link>
const postgreql = <Link href='https://www.postgresql.org/'>PostgreSQL</Link>
const geoserver = <Link href='http://geoserver.org/'>GeoServer</Link>
const openlayers = <Link href='https://openlayers.org/'>Openlayers</Link>
const html = <Link href='https://developer.mozilla.org/en-US/docs/Web/HTML'>HTML</Link>
const css = <Link href='https://developer.mozilla.org/en-US/docs/Web/CSS'>CSS</Link>
const javascript = <Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>JavaScript</Link>
const bootstrap = <Link href='https://getbootstrap.com/'>Bootstrap</Link>
const jquery = <Link href='https://jquery.com/'>jQuery</Link>
const react = <Link href='https://es.reactjs.org/'>React</Link>
const graphql = <Link href='https://graphql.org/'>GraphQL</Link>
const apollo = <Link href='https://www.apollographql.com/docs/react/'>Apollo Client</Link>
const salesforce = <Link href='https://www.salesforce.com'>Salesforce</Link>
const oktana = <Link href='https://www.oktana.com/'>Oktana</Link>
const webAccessibility = <Link href='https://www.w3.org/WAI/fundamentals/accessibility-intro/'>web accessibility</Link>
const redux = <Link href='https://redux.js.org/'>Redux</Link>
const reduxSaga = <Link href='https://redux-saga.js.org/'>Redux-Saga</Link>
const brightplan = <Link href='https://www.brightplan.com/'>Brightplan</Link>

const MyLife: FC = () => {
  return (
    <Page title='Experience'>
      <article>
        <h2 className='page__sectionHeader'>EPS GRAU</h2>
        <p>
          I have the experience of working for 5 years and a half in the development of a { gis } for the web.
          In that project I performed as a full-stack dev. I Learned how to set up a server with { expressjs },
          implement data models in { postgreql } and put application logic in functions and triggers.
          I used { geoserver } to create maps from the data in { postgreql } which then were shown to users
          by using { openlayers }. { html }, { css }, { javascript }, { bootstrap } and { jquery } were also tools that I used very often.
        </p>
        <p>
          The last two and half years in that project, I got experience of working with { react }, { graphql } and { apollo } when re-engineering the { gis } to use such technologies.
          The new version of it was released with good acceptance.
        </p>
      </article>
      <section>
        <h2 className='page__sectionHeader'>Oktana</h2>
        <p>
          I joined { oktana } as a Developer. I was part of a training program where I got familiar with { salesforce }.
          Working here gave me the opportunity of working for { brightplan }, a US-based company.
        </p>
        <article>
          <h3 className='page__subSectionHeader'>Brightplan</h3>
          <p>
            I performed as a front-end dev. I started working on the removal from the project of an old framework
            they were not going to use anymore, and then moved to fixing some bugs, which was a really good
            introductory experience, in the sense that it really put me to the test and got me familiar with the code.
            Later I joined a Scrum Team to work on the development/maintenance of features.
          </p>
          <p>
            At Brightplan I strengthend my { javascript }, { react } and { css } Skills, but also got familiarity with { redux } and { reduxSaga }.
            Besides, I learned and put to practice { webAccessibility } concepts and guidelines.
          </p>
        </article>
      </section>
    </Page>
  )
}

export default MyLife
