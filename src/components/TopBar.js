

function TopBar({cityStateChanger}){

    const data = [
        {title : "Mumbai",id:"1"},
        {title : "Delhi",id:"2"},
        {title : "Chennai",id:"3"},
        {title : "Hyderabad",id:"4"},
        {title : "Kolkata",id:"5"},
    ]


    function handleClick(event){
      
        cityStateChanger(event.target.value)
    }


    return(
<>
    <h1 className="font-thin text-3xl text-center py-4 shadow-sm shadow-slate-900">TOP SEARCHES</h1>
        <div className="flex mt-5 font-bold  text-md md:text-2xl justify-around">
            {data.map(city => (
                <button  value={city.title} onClick={handleClick} className=" hover:text-gray-800 " key={city.id}>{city.title}</button>
            ))}
        </div>

</>
    )
}


export default TopBar 