import InputField from "./components/InputField";
import TopBar from "./components/TopBar";
import Intro from "./components/Intro"
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import Forecast from "./components/Forecast";


 export const WeatherContext=createContext();
function App() {
  const [Data, setData] = useState([])
  const [city, setCity] = useState('kanpur')
  const [bg, setBg] = useState("")



  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2203e8d6434a0cee809e7ad8f8e69490`
    axios.get(url).then(response => {
      handlebg(response.data.weather[0].id)
      setData(response.data)

    }).catch(err => {
      console.log(err);
    })


  }, [city])

  function handlebg(id) {
    if (id >= 200 && id < 300) {
      setBg("bg-[url('./Images/ThunderStorm.webp')]")
    }

    else if (id >= 300 && id < 600) {
      setBg("bg-[url('./Images/Drizzle.webp')]")
    }

    else if (id >= 600 && id < 700) {
      setBg("bg-[url('./Images/Snow.webp')]")
    }

    else if (id >= 700 && id < 800) {
      setBg("bg-[url('./Images/haze.webp')]")
    }

    else if (id >= 801 && id < 900) {
      setBg("bg-[url('./Images/Clouds.webp')]")
    }

    else {
      setBg("bg-[url('./Images/clear.webp')]")
    }



  }




  return (
    <>
      {Data.length === 0 ? (<div>Loading...</div>) :
        <>
          <div className={`w-full pb-8 bg-cover text-white h-fit ${bg}`}>
            <WeatherContext.Provider value={Data}>
            <TopBar cityStateChanger={setCity} />
            <InputField cityStateChanger={setCity} />
            <Intro/>
            <Forecast lat={Data.coord.lat} long={Data.coord.lon} />
            </WeatherContext.Provider>
          </div>
        </>
      }
    </>
  )
}

export default App;
