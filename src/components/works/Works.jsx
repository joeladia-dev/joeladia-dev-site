import { useState } from 'react';
import './works.scss';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: '1',
      icon: './assets/globe.png',
      title: 'Jobster Web App',
      desc: 'Used Jobify API for Log-in function, registration, pagination, search, and also for the jobs CRUD operation. Used react-toastify npm package for pop-up notifications. Used React Hooks with Redux and Redux-toolkit for State Management. Axios http library for fetching - request/response. Used Styled Components for styling the components and React Router 6 for the Routing. Firebase for the App hosting',
      img: 'assets/jobster.png',
      link: 'https://react-jobster-app.web.app/',
      git: 'https://github.com/joeladia-dev/Jobster-App',
    },
    {
      id: '2',
      icon: './assets/mobile.png',
      title: 'Comfy Sloth Store',
      desc: 'Comfy Sloth React Store App - Used Comfy Sloth Store/Products API. React Hooks,useReducer with ContextAPI- Implemented different types of sorting of products with variations, with log in Authentication/Verification with the use of Auth0 API. Connected to Stripe API thru the utilization of Netlify Serverless Functions, complete with cart,checkout functionality with stripe validations.',
      img: 'assets/comfy.png',
      link: 'https://react-comfy-sloth-store.web.app/',
      git: 'https://github.com/joeladia-dev/React-Comfy-Sloth-Store',
    },
    {
      id: '3',
      icon: './assets/writing.png',
      title: 'Search Github User App',
      desc: 'Search Github User - Uses Github Rest API. Implemented the functionalities with the use of ContextAPI and React Hooks. React-Router-6 for the page Routings. Styled with React Styled Components and React Icons. Fusion Charts Library for the Data and Statistics Charts display and styling. Authentication login/sign-up with Auth0 API. Used Axios for the http library. App hosting is with Netlify and Google Firebase.',
      img: 'assets/github.png',
      link: 'https://github-user-app-5ebbd.web.app/',
      git: 'https://github.com/joeladia-dev/react-search-github-user-app',
    },
    {
      id: '4',
      icon: './assets/globe.png',
      title: 'Cocktail Search App',
      desc: 'Search Cocktail React App -Search the ingredients and procedures on how to make your favorite cocktails using this app that uses Cocktail DB API - State Management with Context API and React Hooks. Routing with React Router. App hosting with Netlify and Google Firebase.',
      img: 'assets/cocktail.png',
      link: 'https://react-cocktail-search-app.web.app/',
      git: 'https://github.com/joeladia-dev/react-project-cocktaildb',
    },
  ];

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='works' id='works'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className='container'>
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  <div className='imgContainer'>
                    <img src={d.icon} alt='' />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a
                    href={d.link}
                    className='btn'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Live Site
                  </a>
                  <a
                    href={d.git}
                    className='btn'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Project Code
                  </a>
                </div>
              </div>
              <div className='right'>
                <img src={d.img} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src='assets/arrow.png'
        className='arrow left'
        alt=''
        onClick={() => handleClick('left')}
      />
      <img
        src='assets/arrow.png'
        className='arrow right'
        alt=''
        onClick={() => handleClick()}
      />
    </div>
  );
}
