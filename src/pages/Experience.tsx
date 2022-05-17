import { FC } from 'react'
import Page from 'components/Page'

const Link: FC<{ href: string }> = (props) => <a { ...props } className='page__link' rel='noreferrer' target='_blank' />

const gis = <Link href='https://www.esri.cl/es-cl/que-es-el-gis/que-es-gis'>GIS</Link>
const express = <Link href='http://expressjs.com/'>Express</Link>
const geoserver = <Link href='http://geoserver.org/'>GeoServer</Link>
const openlayers = <Link href='https://openlayers.org/'>Openlayers</Link>
const bootstrap = <Link href='https://getbootstrap.com/'>Bootstrap</Link>
const jquery = <Link href='https://jquery.com/'>jQuery</Link>
const react = <Link href='https://es.reactjs.org/'>React</Link>
const graphql = <Link href='https://graphql.org/'>GraphQL</Link>
const apollo = <Link href='https://www.apollographql.com/docs/react/'>Apollo Client</Link>
const redux = <Link href='https://redux.js.org/'>Redux</Link>
const reduxSaga = <Link href='https://redux-saga.js.org/'>Redux-Saga</Link>
const brightplan = <Link href='https://www.brightplan.com/'>Brightplan</Link>
const postgresql = <Link href='https://www.postgresql.org/'>PostgreSQL</Link>
const node = <Link href='https://nodejs.org/es/'>Node</Link>
const styledComponents = <Link href='https://styled-components.com'>Styled Components</Link>
const jest = <Link href='https://jestjs.io'>Jest</Link>
const reactHookForm = <Link href='https://react-hook-form.com/'>React Hook Form</Link>
const reactQuery = <Link href='https://react-query.tanstack.com'>React Query</Link>
const formik = <Link href='https://formik.org'>Formik</Link>
const kellerWilliams = <Link href='https://www.kw.com'>Keller Williams</Link>
const accessibility = <Link href='https://www.w3.org/WAI/fundamentals/accessibility-intro/'>accessibility</Link>
const typescript = <Link href='https://www.typescriptlang.org'>TypeScript</Link>

const MyLife: FC = () => {
  return (
    <Page title='Experience'>
      <article>
        <h2 className='page__sectionHeader'>EPS GRAU</h2>
        <p>
          I worked in the development of a Web { gis } for the company. I mainly used { node }, { express } and { postgresql } to build the API, while for the Server of Maps, I used { geoserver }.
        </p>  
        <p>
          Regarding the Web App, I used { openlayers }, { bootstrap } and { jquery }, but later I changed to { react }.
          At that time I also updated the <b>API</b> to be { graphql }-based and adopted { apollo } for an easy integration between { react } and { graphql }.
        </p>
      </article>
      <article>
        <h2 className='page__sectionHeader'>Oktana</h2>
        <p>
          I joined { brightplan }, a US-based company. I started fixing some bugs and doing some cleanup to the code,
          but later I joined a Scrum Team and we worked in the delivery of new features, bigger refactors and code quality improvement efforts.
          We also worked to improve the { accessibility } of the Web App.
        </p>
        <p>
          Here I worked with { react }, { redux }, { reduxSaga }, { formik }, among others.
        </p>
      </article>
      <article>
        <h2 className='page__sectionHeader'>Oktana</h2>
        <p>
          I joined { kellerWilliams }, a US-based company. I primarily worked in the development of reusable components,
          making sure they follow the company theme guidelines, they are accessible and they can be used along with { reactHookForm }.
          I also played the role of a code reviewer, where I focused in ensuring good code quality.
        </p>  
        <p>
          Here I worked with { react }, { reactQuery }, { styledComponents }, { jest }, { typescript }, among others.
        </p>
      </article>
    </Page>
  )
}

export default MyLife
