import Form from '../components/Form'
import image from '../src/assets/newsletter-ryan.svg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact(){
    return(
        <>
        <Navbar/>
        <main className='p-5'>
            <h1 className='text-center font-bold'>CONTACT ME</h1>
            <div>
                <p className='text-lg font-semibold'>Send Me a message</p>
                <Form/>
            </div>
            <div className='mb-2.5'>
            <p className='text-lg font-semibold mb-2.5'>Socials</p>
            <ul>
                <li><a className='transform hover:scale-105 transition ease-in-out duration-300 inline-block hover:text-[#6cc644]' href="https://github.com/Ianmwia"><i className="fa-brands fa-github"></i>Github</a></li>
                <li><a className='transform hover:scale-105 transition ease-in-out duration-300 inline-block hover:text-[#1877F2]'href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i>Facebook</a></li>
                <li><a className='transform hover:scale-105 transition ease-in-out duration-300 inline-block hover:text-[#1DA1F2]'href="https://x.com/"><i className="fa-brands fa-x-twitter"></i>Twitter</a></li>
                <li><a className='transform hover:scale-105 transition ease-in-out duration-300 inline-block hover:text-[#e7a33e]'href="https://ke.linkedin.com/"><i className="fa-brands fa-linkedin"></i>LinkedIn</a></li>
            </ul>
            </div>
            <div className='border flex justify-between items-start gap-6 p-4 rounded'>
                <div className='flex flex-col gap-4 flex-1'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-lg font-semibold'>Newsletter</p>
                        <p>Subscribe to my newsletter to get notified of when I publish new articles, find cool things on the web, and more!</p>
                    </div>
                    <div>
                        <form action=""
                        onSubmit={e => e.preventDefault()}
                        >
                        <input className='outline rounded p-2 mr-1' type="email" required placeholder="Email Address" autoComplete='email'/>
                        <button className='rounded bg-gray-800 text-white p-2'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='shrink-0'>
                    <img src={image} alt="newsletter image" className='w-48 h-auto'/>
                </div>
            </div>

        </main>
        <Footer/>
        </>
    )
}
export default Contact