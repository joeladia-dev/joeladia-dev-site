import { useState, useRef, useEffect } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const inputValueName = useRef();
  const inputValueEmail = useRef();
  const inputValueMessage = useRef();
  const [message, setMessage] = useState(false);

  const clearInputFields = () => {
    inputValueName.current.value = '';
    inputValueEmail.current.value = '';
    inputValueMessage.current.value = '';
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_82nqlfb',
        'template_zwqb7jm',
        form.current,
        'sDTUiRux34bSj2lT3'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage(false);
      clearInputFields();
    }, 5000);
  });
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h2>Contact ✉</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            placeholder='Name'
            name='user_name'
            ref={inputValueName}
          />
          <input
            type='text'
            placeholder='Email'
            name='user_email'
            ref={inputValueEmail}
          />
          <textarea
            placeholder='Message'
            name='message'
            ref={inputValueMessage}
          ></textarea>
          <button type='submit' value='Send'>
            Send
          </button>
          {message && (
            <p>
              Thank you, your message was sent successfully! I'll get back to
              you ASAP 😀
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
