import education from '../../assets/education.jpg'
import experience from '../../assets/experience.jpg'
import { useContext } from 'react'
import good from '../../assets/photo.jpg'
import bad from '../../assets/photo_dark.jpg'
import ContentItem from './ContentItem/ContentItem'
import SkillsItem from './SkillsItem/SkillsItem'
import ThemeContext from '../../Context/ThemeContext'

const frontendData = ['JS', 'CSS', 'HTML', 'React', 'Redux', 'Typescript', 'Jest', 'Antd', 'MUI']
const backendData = ['NodeJS', 'Express', 'Mongo']
const blockchainData = ['Solidity', 'ERC20', 'ERC741', 'ERC1155', 'EthersJS', 'Dappnode']
const commonData = ['Git', 'Eslint', 'Prettier']
const contentItemData = [
  {
    text: '24 years old energetic, hard-working programmer. I love travelling, doing sports, watching movies. Took  part in the work and travel program.',
    imgHeight: 270,
    imgWidth: 200,
    textFirst: true,
    src: [good, bad],
  },
  {
    text: 'Education - Kazan Federal University, institute of economic and financial management, specialist of economical security, years: 2016-2021, also - certificate udemy react and certificate udemy node JS',
    imgHeight: 300,
    imgWidth: 200,
    textFirst: false,
    src: [education],
  },
  {
    text: 'Experience - 2+ year commercial development, over 10 commercial projects including development of pharmacy apps, functional implementation based on gnosis chain, develop new user-facing features, build reusable code and libraries for future use, optimize application for maximum speed and scalability',
    imgHeight: 220,
    imgWidth: 300,
    textFirst: true,
    src: [experience],
  },
]

const Main = () => {
  const { theme } = useContext(ThemeContext)

  console.log('render main')

  return (
    <div className='main'>
      <div className='main_welcome'>
        <div className='main_welcome_text'> Hi my name is Danil and I'm a frontend developer</div>
      </div>
      <div className='main_content'>
        {contentItemData.map((item, key) => (
          <ContentItem
            key={key}
            src={item.src}
            text={item.text}
            imgWidth={item.imgWidth}
            imgHeight={item.imgHeight}
            textFirst={item.textFirst}
          />
        ))}
        <div className='main_content_item'>
          <div className={`main_content_item_skills ${theme === 'light' ? 'skillsLight' : 'skillsDark'}`}>
            <div className='main_content_item_skills_title'>Skills</div>
            <SkillsItem data={frontendData} title={'Frontend'} />
            <SkillsItem data={backendData} title={'Backend'} />
            <SkillsItem data={blockchainData} title={'Blockchain'} />
            <SkillsItem data={commonData} title={'Common'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
