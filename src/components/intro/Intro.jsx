import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        'HTML 5',
        'CSS 3',
        'Javascript',
        'React JS',
        'SASS',
        'Git',
        'Github',
        'Node JS',
        'Express JS',
        'MongoDB',
        'Mongoose',
      ],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/man.png' alt='joel adia' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There 😃 I'm</h2>
          <h1>Joel Adia</h1>
          <h2>Front-End Developer</h2>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#about'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
    </div>
  );
}
