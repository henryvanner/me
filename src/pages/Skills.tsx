import { FC } from 'react'
import skillsData from '../data/skills'
import SkillCardGroup from 'components/SkillCardGroup'
import Page from 'components/Page'
import 'styles/Skills.scss'

const Skills: FC = () => {
  return (
    <Page title='Skills'>
      <h2 className='page__sectionHeader'>My toolkit includes but does not limit to</h2>
      <SkillCardGroup skills={ skillsData.data } />
    </Page>
  )
}

export default Skills
