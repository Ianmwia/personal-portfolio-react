function Navbar(){
    return(
        <>
        <nav className='bg-gray-900 text-white flex justify-between p-2.5' >
            <div>
                <p className='text-2xl font-bold'>My Portfolio</p>
            </div>
            <ul className='flex space-x-3'>
                <li className='hover:scale-105 transition duration-300 hover:decoration-amber-400 hover:underline'><a href="">About</a></li>
                <li className='hover:scale-105 transition duration-300 hover:decoration-amber-400 hover:underline'><a href="">Projects</a></li>
                <li className='hover:scale-105 transition duration-300 hover:decoration-amber-400 hover:underline'><a href="">Blog</a></li>
                <li className='hover:scale-105 transition duration-300 hover:decoration-amber-400 hover:underline'><a href="">Contact</a></li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar