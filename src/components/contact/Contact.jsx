import './contact.css'
import Phone from '../../images/icons8-phone-100.png'
import Email from '../../images/icons8-email-64.png'
import Address from '../../images/icons8-address-80.png'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const send = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_sgnwek8',
        'template_rvlhtd8',
        formRef.current,
        'user_nVLBRPb3OpwcAuLGrJEok',
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }
  return (
    <div className="contact">
      <div className="ct-bg"></div>
      <div className="ct-wrapper">
        <div className="ct-left">
          <div className="ct-title">Let's discuss your idea</div>
          <div className="ct-info">
            <div className="ct-info-item">
              <img src={Phone} alt="" className="ct-icon" />
              <span>+880 1624 767 207</span>
            </div>
            <div className="ct-info-item">
              <img src={Email} alt="" className="ct-icon" />
              <span>kdiganto29@gmail.com</span>
            </div>
            <div className="ct-info-item">
              <img src={Address} alt="" className="ct-icon" />
              <span>Dhaka, Narayanganj, Bangladesh</span>
            </div>
          </div>
        </div>
        <div className="ct-right">
          <p className="ct-desc">
            <b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <form ref={formRef} onSubmit={send}>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="text" name="user_email" placeholder="Email" />
            <input type="text" name="user_subject" placeholder="Subject" />
            <textarea rows="5" name="message" placeholder="Message" />
            <button type="submit">Send</button>
            {done && <div className="alert">thanks for your message.</div>}
          </form>
        </div>
      </div>
    </div>
  )
}
