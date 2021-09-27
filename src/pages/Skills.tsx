import { FC } from 'react'
import skills from '../data/skills.json'
import SkillCardGroup from 'components/SkillCardGroup'
import Page from 'components/Page'
import 'styles/Skills.scss'

const Skills: FC = () => {
  return (
    <Page title='Skills'>
      <h2 className='page__sectionHeader'>My toolkit includes but does not limit to</h2>
      <SkillCardGroup skills={ skills.data } />
    </Page>
  )
}

export default Skills
