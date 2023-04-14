import {useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
    return (
        <>
            <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase"> Welcome to</h2>

            <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-8">Space Launch</h1>

            <div 
            onClick={()=> navigate('/list')}
            className="cursor-pointer text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full"><span className="hover:underline">10 upcoming releases</span></div>
        </>
    )
}

export default Home