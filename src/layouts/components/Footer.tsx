import { FC, useState } from 'react'
import 'styles/Footer.scss'

const Footer: FC = () => {
  const [message, setMessage] = useState('')
  const whatsappLink = encodeURI(`https://wa.me/51945481154?text=${message}`)

  return (
    <footer className='footer'>
      <h2>Contact</h2>
      <ul>
        <li>P. (+51) 945481154</li>
        <li>E. henry.vanner@gmail.com</li>
      </ul>
      <div className='footer__sendMessageForm'>
        <input className='footer__messageInput' onChange={ (e) => setMessage(e.target.value) } type='text' value={ message } />
        <a className='footer__sendMessageButton' href={ whatsappLink } rel='noreferrer' role='button' target='_blank'>Send Message</a>
      </div>
    </footer>
  )
}

export default Footer
