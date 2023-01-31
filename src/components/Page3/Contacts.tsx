import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Tg } from '../../assets/tg.svg'
import { ReactComponent as Ig } from '../../assets/ig.svg'
import { ReactComponent as Gmail } from '../../assets/gmail.svg'
import { ReactComponent as Apple } from '../../assets/apple.svg'
import { IContact } from '../../Types/types'

const Contacts = () => {
  const contacts: IContact[] = [
    { link: 'https://github.com/UnDanilka', icon: Github, title: 'GitHub' },
    { link: ' https://t-do.ru/unDanilka', icon: Tg, title: 'Telegram' },
    {
      link: 'https://instagram.com/un_danilka_?r=nametag',
      icon: Ig,
      title: 'Instagram',
    },
    {
      link: '',
      icon: Gmail,
      title: 'dancingdanil98@gmail.com',
    },
    { link: '', icon: Apple, title: '+66922578869' },
  ]
  return (
    <div className='contacts'>
      {contacts.map((contactItem: IContact, i: number) => {
        return (
          <div className='contact' style={{ animationName: 'first', animationDelay: `0.${i}s` }} key={i}>
            <div className='contact_icon'>
              <contactItem.icon />
            </div>
            {contactItem.link ? (
              <a href={contactItem.link} rel='noreferrer' target='_blank' className='contact_link'>
                {contactItem.title}
              </a>
            ) : (
              <div> {contactItem.title}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Contacts
