import {BsSearch} from 'react-icons/bs'
import {useState} from 'react'


function InputField({cityStateChanger}){
    const [userInput , setUserInput]= useState("")

    function handleChange(event){
       
        setUserInput(event.target.value)
    }
    

    function handleSubmit(event){
        event.preventDefault()
        cityStateChanger(userInput)
        setUserInput("")
    }

    return(
        <>
           <div className="flex mt-10 md:mt-10 w-[60%] md:w-[50%]   mx-auto flex-row gap-3 justify-center">

                <form onSubmit={handleSubmit} className="w-full flex flex-row gap-3">
                    <input onChange={handleChange} value={userInput} placeholder='Search The City....'  className="border text-black rounded-xl text-xl py-2 px-3 border-black w-full" type="text" />
                    <button type='submit'><BsSearch size={40} />
</button>
                </form>

                
           </div> 
        </> 
    )
}


export default InputField ; 