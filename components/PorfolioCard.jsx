export default function PorfolioCard ({imageUrl, title, link}){
    return(
        <>
            <a href={link} target="_blank" className='block'>
                <div>
                     <p className='text-gray-900 font-medium text-lg pb-2'>{title}</p>
                </div>
                <div className='relative w-48 h-72 rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105'>
                    <img src={imageUrl} className='w-full h-full object-cover' />
                </div>

            </a>
        </>
    )
}