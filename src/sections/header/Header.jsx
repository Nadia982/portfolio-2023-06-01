import HeaderImage from '../../assets/natalie.jpg'
import data from './data'
import './Header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          
          <img src={HeaderImage} alt="photo of Natalie Gillam" />
          <h3>Natalie Gillam</h3>
          
        </div>
        <p>I am based in <strong>London, UK</strong> and have been building websites with <strong>React and JavaScript</strong> since 2022. As at June 2023, I am <strong>open to new work opportunities</strong>. If you would like to get in touch then please:</p> 
      
      <div className="header__cta">   
      <a href="https://www.linkedin.com/in/natalie-g-b947331a/" className="btn primary">Message me on LinkedIn</a>
      </div>
     
      </div>

      <div className="header__socials">
        {data.map(item => <a key={data.id} href={data.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)}
      </div>
    </header>
  )
}

export default Header