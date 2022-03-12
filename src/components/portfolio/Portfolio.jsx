import React from 'react'
import './portfolio.css'
import PF from '../../assets/portfolio.png'
import PF2 from '../../assets/portfolio_openCV.png'
import PF3 from '../../assets/portfolio_npm.png'
import PF4 from '../../assets/ugd.jpg'
import PF5 from '../../assets/shop-app.png'
import PF6 from '../../assets/chat-app.png'
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: PF,
      title: 'Object Tracking using YOLO',
      github: 'https://github.com/pruthvi03/DeepSortWithYolov3',
      demo: 'https://www.youtube.com/watch?v=b3I2-_Ceaow'
    },
    {
      id: 2,
      image: PF2,
      title: 'Deep Learning and OpenCv',
      github: 'https://github.com/Devarsh23/Maintaining-Social-Distancing-Through-Deep-Learning-and-OpenCv',
      demo: 'https://www.youtube.com/watch?v=KdOGJzS0kFA'
    },
    {
      id: 3,
      image: PF3,
      title: 'NPM package: puppeteer-table-scraper',
      github: 'https://github.com/pruthvi03/puppeteer-table-scraper#readme',
      demo: 'https://www.npmjs.com/package/puppeteer-table-scraper'
    },
    {
      id: 4,
      image: PF4,
      title: 'User Assistance Device For Blind People',
      github: 'https://github.com/pruthvi03/User-Assistance-Device',
      demo: 'https://www.youtube.com/watch?v=b3I2-_Ceaow'
    },
    {
      id: 5,
      image: PF5,
      title: 'React Native Shop App',
      github: 'https://github.com/pruthvi03/react-native-shop-app',
      demo: 'https://github.com/pruthvi03/react-native-shop-app'
    },
    {
      id: 6,
      image: PF6,
      title: 'Chat App Using SocketIO',
      github: 'https://github.com/pruthvi03/chat_app',
      demo: 'https://pruthvi-chat-app.herokuapp.com/'
    }
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => (
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target='_blank' rel="noreferrer">GitHub</a>
              <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>
        )
        )}
      </div>
    </section>
  )
}

export default Portfolio