import React,{useState,useEffect} from "react";
import {Download} from "../../assets"
import BookAnApartment from "../../Page/Filter/BookAnApartment"
import CalcMainContent from "../Calculator/CalcMainContent" 
import FileDownload from "js-file-download"
import axios from "axios";
//import axios from "axios"

export default function HouseInf({id}){
    
    const room = (id?.rooms || []).map((rooms) => rooms.room)
    const bathroom = (id?.bathrooms || []).map((bathrooms)=> bathrooms.bathroom)
    const balcony = (id?.balconys || []).map((balconys)=> balconys.balcony)
    const [className,setClassName] = useState("")
    useEffect(()=>{
        if(id.badge === "Առկա"){
            console.log(id.badge)
            setClassName("textColorGreen")
        }else if(id.badge === "Վաճառված"){
            console.log(id.badge)
            setClassName("textColorRed")
        }else{
            console.log(id.badge)
            setClassName("textColorYellow")
        }


    },[id, id.badge])

    const houseInf = [
        {id:1,  title: 'Ընդհանուր մակերես', text:id.area },
        {id:2,  title: 'Հյուրասենյակ', text:id.livingroom },
        {id:3,  title: 'Միջանցք', text:id.corridor},
        {id:4,  title: 'Խոհանոց', text:id.kitchen },
        {id:5,  title: 'Ննջասենյակ 1',text:room[0]},
        {id:6,  title: 'Ննջասենյակ 2',text:room[1]},
        {id:7,  title: 'Ննջասենյակ 3',text:room[2]},
        {id:8,  title: 'Սանհանգույց 1 ', text:bathroom[0]},
        {id:9,  title: 'Սանհանգույց 2' , text:bathroom[1]},
        {id:10, title: 'Պատշգամբ 1' , text:balcony[0]},
        {id:11, title: 'Պատշգամբ 2' , text:balcony[1]},
        {id:12, title: 'Հանդերձասենյակ' , text:id.wardrobe},

    ]
    const [toggleOn, setToggleOn] = useState(false)
    const [calcOn, setCalcOn] = useState(false)
    const Apartmentclick =(e,house)=>{
        e.preventDefault();
        setToggleOn(!toggleOn)
        //setNumber(house)
    }
    const ClickButton = (e)=>{
        e.preventDefault()
        setCalcOn(!calcOn)
        
    }
    const saveFile = (e,poster,houseNumber)=>{
        e.preventDefault();
        const imgDownLoad = poster.split("/")
        const imgName = imgDownLoad[imgDownLoad.length - 1]
       
        axios({
            url:`http://localhost:8080/getPdf/${imgName}`,
            method:"GET",
            responseType:"blob",
        }).then((res)=>{
            console.log(res)
            FileDownload(res.data,`${id.houseNumber}.png`)
        }).catch(function (error) {
            console.log(error);
        })
    }
      
     
    return(
        
        <div className="FloorWrapper">
            <div className="FloorMainContent">
                <div className="LeftSide">
                    <div className="left-side-slider">
                        <div className="slider-wrapper">
                            <div className="main-img-wrapper">
                                <div className="main-img-content">
                                    <img src={id.poster} alt=""className="main-img" />
                                </div>
                            </div>
                        </div>
                        <div className="compass-wrapper compass-wrapper-in-left ">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="RightSide">
                    
                   < div>
                    <div className="upload-pdf-wrapper" >
                        <div  className={className}>{id.badge} է</div>
                        <div className="hoseant-dropdown-trigger upload-btn active"  onClick={(e)=>saveFile(e,id.poster,id.houseNumber)}>Ներբեռնել<Download/></div>
                    </div>
                    
                    <div className="header-title">{id.type} N {id.houseNumber} </div>
                    </div>
                    
                    
                    
                    <div className="areas-list">
                        {houseInf.map(house =>
                        house.text !== undefined ?
                        <div className="list-item" key={house.id}>
                            <div className="list-name">{house.title}</div>
                            <div className="line"></div>
                            <div className="item-area">{house.text}մ <sup>2</sup></div>
                        </div>
                        :null
                        )}
                    </div>
                    <div className="price-wrapper">
                        <div className="price">Գինը՝ {id.price} </div>
                        <button className="PrimaryButton" disabled={id.badge === "Առկա"? false :true} onClick={(e)=>{Apartmentclick(e,id.houseNumber)} }>
                            <span>ԱՄՐԱԳՐԵԼ</span>
                        </button>
                    </div>
                    {id.floor >= 3?
                    <div className="linkWrapper">
                        <div>
                            <span>Ծանոթացեք հիփոթեքի պայմաններին </span>
                            <span className="link_text" onClick={ClickButton} >այստեղ</span>
                        </div>
                    </div>
                   :null
                    }
                </div>
            </div>
            {calcOn?<CalcMainContent/>:null}
            {toggleOn  ?<BookAnApartment number1 ={id.houseNumber}/>:null}
        </div>
    )
}
