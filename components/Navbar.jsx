
function Navbar({setCurrentPage}){
    
    return(
        <>
        <nav className='bg-gray-900 text-white flex justify-between p-2.5' >
            <div>
                <p onClick={()=> setCurrentPage('home')} className='text-2xl font-bold hover:scale-105 transition duration-300 hover:text-amber-400'>My Portfolio</p>
            </div>
            <ul className='flex space-x-3'>
                <li 
                onClick={()=> setCurrentPage('about')
                } className='hover:scale-105 transition duration-300 hover:decoration-amber-400 hover:underline'>About</li>
                <li onClick={()=> setCurrentPage('projects')} className='hover:scale-105 transition duration-300 hover:decoration-amber-400 hover:underline'>Projects</li>
                <li onClick={()=> setCurrentPage('contact')} className='hover:scale-105 transition duration-300 hover:decoration-amber-400 hover:underline'>Contact</li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar