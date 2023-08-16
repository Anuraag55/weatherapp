import { useContext } from 'react';
import {BsFillSunriseFill , BsFillSunsetFill ,BsWind ,    BsFillDropletFill , BsCloudFill, BsEyeFill, BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs'
import { WeatherContext } from '../App';

function Intro(){
    const Data=useContext(WeatherContext)

    
    return(
        <div className="  my-5  text-center items-center justify-center flex flex-col">
            <div>
                <h3 className="text-5xl mb-7 font-semibold">{Data.name} {Data.sys.country}</h3>
                <h3 className="text-3xl font-bold">{Math.floor(Data.main.temp/10)}&deg;C</h3>
                <h3 className="text-2xl font-bold">{Data.weather[0].description}</h3>
               
            </div>
            <img className="w-[1/2] items-center justify-center px-2" src={`https://openweathermap.org/img/wn/${Data.weather[0].icon}@4x.png`}  alt="icon"/>
            <div className="flex flex-col gap-5 items-center justify-center text-center ">
                <div className="flex-row gap-3 flex">
                 <p className='flex gap-3 flex-row'><BsFillSunriseFill size={25}/>Sunrise-{new Date(Data.sys.sunrise * 1000).toLocaleDateString()}</p>
                 <p>|</p>
                 <p className='flex gap-3 flex-row'><BsFillSunsetFill size={25}/>Sunset-{new Date(Data.sys.sunset * 1000).toLocaleDateString()}</p>
                </div>
                
                <div className="flex-row gap-3 flex">
                 <p className='flex gap-3 flex-row'><BsEyeFill size={25}/>Visibility-{Data.visibility/1000}km</p>
                 <p>|</p>
                 <p className='flex gap-3 flex-row'><BsWind size={25}/>Wind Speed-{Data.wind.speed}km/hr</p>
                </div>

                <div className="flex-row gap-3 flex">
                 <p className='flex gap-3 flex-row'><BsCaretUpFill size={25}/>Maximum-{Math.floor(Data.main.temp_max/10)}&deg;C</p>
                 <p>|</p>
                 <p className='flex gap-3 flex-row'><BsCaretDownFill size={25}/>Minimum-{Math.floor(Data.main.temp_min/10)}&deg;C</p>
                </div>

                <div className="flex-row gap-3 flex">
                 <p className='flex gap-3 flex-row'><BsFillDropletFill size={25}/>humidity-{Data.main.humidity}</p>
                 <p>|</p>
                 <p className='flex gap-3 flex-row'><BsCloudFill size={25}/>Cloud-{Data.clouds.all}</p>
                </div>



            </div>
        </div>
    )

}

export default Intro;