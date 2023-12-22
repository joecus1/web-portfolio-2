import React from "react"
import emailjs from '@emailjs/browser';

const EmailForm = () => {
    const refForm = React.useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_49uyswb',
            'contact_form',
            refForm.current,
            'MqmhjDEecuhMEVDgZ'
          )
          .then(
            () => {
              alert('Message sent!')
              window.location.reload(false)
            },
            () => {
              alert('Message failed to send, try again.')
            }
          )
      }

    return (
        <div className='text-white'>
            <form className='flex-col text-center content-center justify-center items-center' ref={refForm} onSubmit={sendEmail}>
                <ul className='space-y-3'>
                    <li>
                        <input className="form-field" type='text' name='name' placeholder='Name' required />
                    </li>
                    <li>
                        <input className="form-field" type='email' name='email' placeholder='Email' required />
                    </li>
                    <li>
                        <input className="form-field" type='text' name='subject' placeholder='Subject' required />
                    </li>
                    <li>
                        <textarea className="form-field" placeholder='Message' name='message' required />
                    </li>
                    <li>
                        <input type='submit' value='Send Message' className="btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"/>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default EmailForm;