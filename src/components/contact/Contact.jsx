import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import './contact.css'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__icon' />
            <h4>Email</h4>
            <h5>pruthvi.hingu012@gmail.com</h5>
            <a href="mailto:pruthvi.hingu012@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__icon' />
            <h4>Messenger</h4>
            <h5>Pruthvi Hingu</h5>
            <a href="https://m.me/pruthvi.hingu" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__icon' />
            <h4>Whatsapp</h4>
            <h5>+911234567890</h5>
            <a href="https://api.whatsapp.com/send?phone=+911234567890" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type='text' placeholder='Your Full Name' name='name' required/>
          <input type='email' placeholder='Your Email' name='email' required/>
          <textarea name='message' rows='7' placeholder='Your Message'></textarea>
          <button className="btn btn-primary" type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact