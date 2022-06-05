import './testimonials.scss';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: 'Ivy Ann Bunyi',
      title: 'Owner Parfumerie De Frances',
      img: 'assets/ivy.jpg',
      icon: 'assets/twitter.png',
      desc: 'I am a very satisfied client working with Joel. He has great ideas and always provides great suggestions. I will definitely recommend him and I myself will continue to work with him on upcoming projects. Great Job!',
    },
    {
      id: 2,
      name: 'Chris Schwarz',
      title: 'Owner WebDesign499',
      img: 'assets/chris.jpg',
      icon: 'assets/youtube.png',
      desc: ' Joel is a hard-worker, always punctual. Even with tight deadlines and issues, he always see to it that he delivers on every projects that I entrusted to him. He is a great role player and always clear when he communicates with the team.',
      featured: true,
    },
    {
      id: 3,
      name: 'Allan Collins Sawit',
      title: 'Infrastructure Engineer',
      img: 'assets/allan.png',
      icon: 'assets/linkedin.png',
      desc: 'Joel provided excellent work with the project, he also delivered in a timely manner. I am looking forward on working with him on future projects.',
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className='container'>
        {data.map((d) => (
          <div className={d.featured ? 'card featured' : 'card'}>
            <div className='top'>
              <img src='assets/right-arrow.png' className='left' alt='' />
              <img className='user' src={d.img} alt='' />
              <img className='right' src={d.icon} alt='' />
            </div>
            <div className='center'>{d.desc}</div>
            <div className='bottom'>
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
