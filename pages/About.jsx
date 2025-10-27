import pfp from '../src/assets/WIN_Pro.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About(){
    return(
        <>
        <Navbar/>
        <main className='ml-2.5 mr-2.5'>
        <div className='mb-5'>
        <h2 className='text-2xl font-bold text-gray-900'>About Me</h2>
        <img src={pfp} alt="profile-image" />
        <p className='p-2'>Hi, my name is <span><strong>Ian</strong></span>I am a passionate web developer diving into Fullstack Software development</p>
        <p className='p-2'>I love building Intuitive and dynamic web Applications</p>
        </div>
        <div className='mb-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Skills</h2>
        <p className='p-2'>Currently, I am focused on mastering FullStack Web Development</p>
        <p className='p-2'>FrontEnd: HTML, CSS, JAVASCRIPT, REACTJS</p>
        <p className='p-2'>Throughout My Journey , I have built Several projects, each teaching me new skills and best practices.
            I'am always eager to take on new Challenges that push my boundaries and help me grow as a developer
        </p>
        </div>
        <div className='mb-5'>
            <h2 className='text-2xl font-bold text-gray-900'>Hobbies</h2>
            <p className='p-2'>Beyond Coding I enjoy exploring and engaging activities</p>
            <p className='p-2'>Some of my hobbbies are</p>
            <ul className='space-y-2'>
                <li>Sports - I like watching sports and getting to play some games ont the weekend evenings</li>
                <li>Video games - I love challenging puzzle games and Chess</li>
                <li>Surfing the web - I enjoy engaging in developer communities and learning new ways to build the web</li>
            </ul>
        </div>
        </main>
        <Footer/>
        </>
    )
}
export default About