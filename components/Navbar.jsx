function Navbar(){
    return(
        <>
        <nav className='bg-gray-900 text-white flex justify-between px-2.5' >
            <div>
                <p className='text-2xl font-bold'>My Portfolio</p>
            </div>
            <ul className='hidden'>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
                
            </ul>
        </nav>
        </>
    )
}
export default Navbar