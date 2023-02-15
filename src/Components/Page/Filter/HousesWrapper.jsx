import React from "react"
//import axios from "axios"
import {Link} from "react-router-dom"
import { Upload} from "../../assets"
import FileDownload from "js-file-download"
import axios from "axios"

export default function HousesWrapper({card,toggle,setToggle,setNumber}){
  
    const saveFile = (e,poster,houseNumber) => {
        e.preventDefault();
        const  img = card?.map((arr)=>arr.poster)
        const saveImg = img.find((arr)=>arr === poster)
        const imgDownLoad = saveImg.split("/")
        const imgName = imgDownLoad[imgDownLoad.length - 1]
    
        axios({
            url:`http://localhost:8080/getPdf/${imgName}`,
            method:"GET",
            responseType:"blob",
        }).then((res)=>{
            console.log(res)
            FileDownload(res.data,`${houseNumber}.png`)
        }).catch(function (error) {
            console.log(error);
        })

    };
   
    

    const bookhouse =(e,value)=>{
        e.preventDefault();
        
        console.log(value)
        setNumber(value)
        setToggle(!toggle)
        //window.location= e.value
    }

    return(
        <div className="houses-wrapper">
            
            <div  className="houses-list">
                {card.map((house,id)=>
                    <Link to={`/building/floor/${house.floor}/${house._id}`} key ={id} className="house-card" >
                        <div className="house-number">N {house.houseNumber}</div>
                        <div className="card-img-wrapper">
                            <img src={house.poster} alt="file" />
                        </div>
                        <div className="card-badge">{house.badge} է</div>
                        <div className="card-price">Գինը՝ {house.price} դրամ</div>
                        <div className="areas-list">
                            <div className="list-item">
                                <div className="item-name"> Մակերես</div>
                                <div className="line"></div>
                                <div className="item-area">{house.area} մ <sup>2</sup></div>
                            </div>
                            <div className="list-item">
                                <div className="item-name">Հարկ</div>
                                <div className="line"></div>
                                <div className="item-area">{house.floor}</div>
                            </div>
                            <div className="list-item">
                                <div className="item-name">Սենյակներ</div>
                                <div className="line"></div>
                                <div className="item-area">{house.roomsCount}</div>
                            </div>
                        </div>
                        <div className="card-btns-wrapper">
                            <button className="PrimaryButton " disabled={house.badge === "Առկա"? false :true} onClick={(e)=>{bookhouse(e,e.currentTarget.dataset.id)}} data-id={house.houseNumber}>
                                <span className="title">Ամրագրել</span>
                                
                            </button>
                            <button className="ant-dropdown-trigger PrimaryButton upload-btn" onClick={(e)=>saveFile(e,house.poster,house.houseNumber)}>
                                <Upload />
                               
                            </button>
                        </div> 
                    </Link>
                )}
            </div>
            
        </div>
        
    )
}