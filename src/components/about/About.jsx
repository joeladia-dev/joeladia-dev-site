import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='left'>
        <div className='image-container'>
          <img src='assets/about2.jpg' alt='joel adia' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper-2'>
          <h3>"Passion and Hard Work"</h3>
          <h1>About Me 😎</h1>
          <p>
            I'm a Front-End Web Developer creating and designing personal, small
            business, or corporate websites. I've been part of several Digital
            Marketing Agencies in the US and Australian Market mostly working
            with Content Management Systems like WordPress and building static
            sites with HTML5, CSS3, and Javascript. My experience ranges from
            building attractive, responsive, and dynamic websites.
            Functionality, Design, and Responsiveness, on all platforms, are
            keys to all the websites I am creating to make sure that the
            Websites and Web Apps I'm building will boost the branding of the
            business and benefit clients and their brands.
          </p>
          <p>
            I'm well versed with the latest technologies for Front-End Web
            Development and Design using, HTML5, CSS3 with Grid and Flexbox,
            SASS, Javascript, React JS with React Hooks, React Styled
            Components, State Management library like Redux with Redux toolkit
            implementation, Asynchronous JS, API fetching and request-response
            cycle or using HTTP library like Axios, plain authentication
            implementation using auth0 SDK, library and other related
            technologies.
          </p>
          <p>
            I'm adept at using version control like Git and repositories like
            Github, I have adequate background and understanding of the
            back-end, and I have some experience building APIs and using
            server-side Javascript run time - Node JS with Express, MongoDB and
            mongoose, and Postman API testing application.
          </p>
          <p>
            I always have had the passion and love for learning and growing my
            skills, This makes me more confident in tackling more complex
            projects. I'm constantly learning new technologies and applying them
            to my work to make my projects more diverse and beneficial for the
            business.
          </p>

          <a
            href='
https://drive.google.com/file/d/1R_eQ3xQFG_0leMGs8A8gx48YnDcWmnyQ/view?usp=sharing
'
            className='cv-btn'
            target='_blank'
            rel='noreferrer'
          >
            View My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
