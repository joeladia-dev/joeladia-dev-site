import './topbar.scss';
import { Person, Mail, LinkedIn, GitHub, Twitter } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro'>
            <img src='assets/jlogo8.png' alt='joel adia' className='logoImg' />
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+63 919 378-2779</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>joeladia.webdev@gmail.com</span>
          </div>
          <div className='itemContainer'>
            <a
              href='https://www.linkedin.com/in/joel-adia-56b4a3137/'
              className='socials'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedIn />
            </a>
            <a
              href='https://twitter.com/joel_adia'
              className='socials'
              target='_blank'
              rel='noreferrer'
            >
              <Twitter />
            </a>
            <a
              href='https://github.com/joeladia-dev'
              className='socials'
              target='_blank'
              rel='noreferrer'
            >
              <GitHub />
            </a>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
