import './App.css'
import About from './Component/About/About'
import Blog from './Component/Blog/Blog'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Hire from './Component/Hire/Hire'
import Project from './Component/Project/Project'
import Service from './Service/Service'

function App() {

  return (
    <div className='lg:px-8 px-3'>
      <Header></Header>
      <About></About>
      <Service></Service>
      <Project></Project>
      <Hire></Hire>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  )
}

export default App
