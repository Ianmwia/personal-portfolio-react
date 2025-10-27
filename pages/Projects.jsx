import weather from '../src/assets/weather.jpg'
import counter from '/src/assets/cal-counter.jpg'
import restaurant from '/src/assets/restaurant-react.jpg'

{/*

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
*/}
import PorfolioCard from "../components/PorfolioCard";

function Projects(){
    return(
        <>
        <main className='m-2.5 p-2'>
            <h1 className='text-3xl font-bold mb-8'>Projects</h1>
            <div className='flex flex-wrap gap-8 justify-between'>
            <div>
                <PorfolioCard
                    imageUrl={weather}
                    title='Weather App'
                    description='Weather app to get the curent weatherm hourly forecast and 5 day forecast'
                    link='https://weather-now-capstone.netlify.app/'
                />
            </div>
            <div className='flex flex-wrap justify-center gap-8 p-2.5'>
                <PorfolioCard
                    imageUrl={restaurant}
                    title='Restaurant'
                    description='Restaurant app showcasing delicious foods'
                    link='https://restaurant-zindua.netlify.app/'
                />
            </div>
            <div className='flex flex-wrap justify-center gap-8 p-2.5'>
                <PorfolioCard
                    imageUrl={counter}
                    title='Calorie Counter'
                    description='App to count the total calories consumed'
                    link='https://calories-counter-project.netlify.app/'
                />
            </div>
            </div>
        </main>
        </>
    )
}
export default Projects