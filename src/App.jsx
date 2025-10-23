import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './App.css'
import { useState } from "react"
import About from "../pages/About"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Blog from "../pages/Blog"
import Projects from "../pages/Projects"

function App() {
  const [currentPage, setCurrentPage] = useState('home')
    const changePages = () => {
        switch(currentPage){
            case 'home':
                return <Home />
            case 'about':
                return <About/>
            case 'projects':
                return <Projects />
            case 'blog':
                return <Blog />
            case 'contact':
                return <Contact/>
            default:
                return <Home />
        }
    }
  return (
    <>
    <div className='flex flex-col min-h-screen'>
    {/*Navbar */}
    <Navbar setCurrentPage={setCurrentPage}/>
    
    {/*Main */}
    <main className='grow'>
        <div>{changePages()}</div>
    </main>
    
    {/*Footer */}
    <Footer/>
      </div>
    </>
  )
}


export default App
