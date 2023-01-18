import good from './photo.jpg'
import bad from './photo_dark.jpg'
import education from './education.jpg'
import experience from './experience.jpg'
import { useContext } from 'react'
import ComboContext from '../../Context/ComboContext'

const frontendData = ['JS', 'CSS', 'HTML', 'React', 'Redux', 'Typescript', 'Jest', 'Antd', 'MUI']
const backendData = ['NodeJS', 'Express', 'Mongo']
const blockchainData = ['Solidity', 'ERC20', 'ERC741', 'ERC1155', 'EthersJS', 'Dappnode']
const commonData = ['Git', 'Eslint', 'Prettier']

const Main = () => {
  const { theme } = useContext(ComboContext)

  return (
    <div className='main'>
      <div className='main_welcome'>
        <div className='main_welcome_text'> Hi my name is Danil and I'm a frontend developer</div>
      </div>
      <div className='main_content'>
        <div className='main_content_item'>
          <div className='main_content_item_text'>
            <div className='main_content_item_text_content'>
              24 years old energetic, hard-working programmer. I love travelling, doing sports, watching movies. Took
              part in the work and travel program.
            </div>
          </div>
          <div className='main_content_item_img'>
            <img src={theme === 'light' ? good : bad} alt='fireSpot' style={{ width: '200px', height: '270px' }} />
          </div>
        </div>
        <div className='main_content_item'>
          <div className='main_content_item_img'>
            <img src={education} alt='fireSpot' style={{ width: '200px', height: '300px' }} />
          </div>
          <div className='main_content_item_text'>
            <div className='main_content_item_text_content'>
              Education - Kazan Federal University, institute of economic and financial management, specialist of
              economical security, years: 2016-2021, also - certificate udemy react and certificate udemy node JS",
            </div>
          </div>
        </div>
        <div className='main_content_item'>
          <div className='main_content_item_text'>
            <div className='main_content_item_text_content'>
              Experience - 2+ year commercial development, over 10 commercial projects including development of pharmacy
              apps, functional implementation based on gnosis chain, develop new user-facing features, build reusable
              code and libraries for future use, optimize application for maximum speed and scalability
            </div>
          </div>
          <div className='main_content_item_img'>
            <img src={experience} alt='fireSpot' style={{ width: '300px', height: '220px' }} />
          </div>
        </div>

        <div className='main_content_item'>
          <div className={`main_content_item_skills ${theme === 'light' ? 'skillsLight' : 'skillsDark'}`}>
            <div className='main_content_item_skills_title'>Skills</div>
            <div className='main_content_item_skills_items'>
              <div className='main_content_item_skills_items_title'>Frontend</div>
              {frontendData.map((item, i) => {
                return (
                  <div key={i} className='main_content_item_skills_items_item'>
                    {item}
                  </div>
                )
              })}
            </div>
            <div className='main_content_item_skills_items'>
              <div className='main_content_item_skills_items_title'>Backend</div>
              {backendData.map((item, i) => {
                return (
                  <div key={i} className='main_content_item_skills_items_item'>
                    {item}
                  </div>
                )
              })}
            </div>
            <div className='main_content_item_skills_items'>
              <div className='main_content_item_skills_items_title'>Blockchain</div>
              {blockchainData.map((item, i) => {
                return (
                  <div key={i} className='main_content_item_skills_items_item'>
                    {item}
                  </div>
                )
              })}
            </div>
            <div className='main_content_item_skills_items'>
              <div className='main_content_item_skills_items_title'>Common</div>
              {commonData.map((item, i) => {
                return (
                  <div key={i} className='main_content_item_skills_items_item'>
                    {item}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
