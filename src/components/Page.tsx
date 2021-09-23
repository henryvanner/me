import { FC } from 'react'
import 'styles/Page.scss'
import PageTitle from './PageTitle'

const Page: FC<{ title: string }> = ({ children, title }) => {
  return (
    <>
      <PageTitle>{ title }</PageTitle>
      { children }
    </>
  )
}

export default Page
