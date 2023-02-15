import React,{useState,useEffect} from "react"
import HousesFilter from "./HousesFilters"
import BookAnApartment from "./BookAnApartment"

export default function Fillterpage(){
    const [isToggleOn, setisToggleOn] = useState(false)
    const [number,setNumber]= useState("")
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div>
            <HousesFilter isToggle={isToggleOn} setisToggle={setisToggleOn} setNumber={setNumber}/>
            {isToggleOn
                ?<BookAnApartment number={number}/>
                :null
            }
            
       
        </div>
    )
}