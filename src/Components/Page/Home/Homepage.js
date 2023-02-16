import React,{useEffect} from "react"
import SliderInfo from "./SliderInfo"
import {SliderData} from "../../Slider/SlideData"
import HomepageAbout from "./HomepageAbout"
import HomepageContact from "./HomepageContact"
import { useNavigate } from "react-router-dom"

export default function Homepage() {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    let navigate = useNavigate()

    const heandleClick = (e) => {
        e.preventDefault()
        window.scrollTo(0, 0)
        navigate("/buildings")
    }

    return(
        <header>
            <SliderInfo link={heandleClick} slides={SliderData}/>
            <HomepageAbout link={heandleClick} />
            <HomepageContact/>
        </header>   
    )
}
