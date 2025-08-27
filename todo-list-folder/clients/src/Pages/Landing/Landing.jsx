import NavBar from './NavBar'
import img_landing from '../../asset/img-home.png'
import './Landing.css'
const Landing = () => {
  return (
    <div>
      <NavBar/>
      <section className='hero'>
        <div className='hero-text'>
          <h1>
            Schedule Your<br/>
            Daily Tasks With <br/>
            <span className='accent'>DoDo!</span>
          </h1>
          <div className='cta'>
            <a className='btn btn-primary' href='/register'>Register</a>
            <a className='btn btn-ghost' href='/login'>Login</a>
          </div>
        </div>
        <div className='hero-art'>
          <img src={img_landing}alt='People'/>
        </div>
      </section>
    </div>
  )
}

export default Landing