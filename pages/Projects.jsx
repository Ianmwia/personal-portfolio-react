import weather from '../src/assets/weather.jpg'

function Projects(){
    return(
        <>
        <main className='m-2.5'>
            <h1>Projects</h1>
            <div className='border rounded w-48 h-72 flex flex-col'>
                <a href="https://weather-now-capstone.netlify.app/">
                <img src={weather} alt="weather" className='w-full h-2/3 object-cover'/>
                <div className='h-1/3 p-2 overflow-auto'>
                    <p className='font-medium text-lg'>Weather App</p>
                    <p className='text-sm'>Weather app to get the current weather, hourly forecast and weather forecast</p>
                    </div>
                </a>
            </div>
        </main>
        </>
    )
}
export default Projects