import home_pfp from '../src/assets/WIN_Pro.jpg'

function Home(){
    return(
        <>
        <main>
            <div className="m-3 p-4">
            <p className='text-center font-bold tracking-tight text-7xl text-balance'>Lets Create something <span className='bg-linear-to-r from-pink-500 via-yellow-400 to-blue-500 bg-300% bg-clip-text text-transparent animate-gradient-slide'>Memorable</span> together</p>
            </div>
            <div className='grid grid-cols-[1fr_2fr] items center gap-2.5 '>
                <p className='font-semibold flex flex-col justify-center items-center'>Hi, my Name is <span className='bg-linear-to-r from-pink-500 via-yellow-400 to-blue-500 bg-300% bg-clip-text text-transparent animate-gradient-slide uppercase text-3xl'>Ian Mwenda</span> welcome to my portfolio website</p>
                <img src={home_pfp} alt="pfp" className='w-64 h-64 rounded-full object cover justify-self-center' />
            </div>
            <div className='flex flex-row gap-2.5 m-2'>
                <p className='text-lg flex justify-center items-center'>Get Started</p>
                <a href='' className='p-2.5 bg-gray-800 rounded cursor-pointer'>Projects</a>
            </div>
        </main>
        </>
    )
}
export default Home