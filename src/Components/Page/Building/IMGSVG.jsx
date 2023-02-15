import React, { useEffect, useState} from "react"
import axios from "axios";
//import {Link} from "react-router-dom"
export default function Svg(){

  const [state, setState] = useState("");
  const [free,setFree ]= useState("")

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { x, y } = position
  const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });

  const handleChlick = (e)=>{
      e.preventDefault()
      window.location.href =`building/floor/${state}`
      console.log();
  }
   



  useEffect(()=>{
    axios.get(`http://localhost:8080/floor/house/forsale/${state}`)
    .then((response) => {
       const houseinf = response.data
       setFree(houseinf)
       console.log(houseinf)
    })
    .catch(function (error) { 
      console.log(error);
    })
  console.log(state)
  },[state])
    
      console.log(free)
    
       
    return(
        <>
          <svg onMouseOver ={setFromEvent} width="900" height="501" viewBox="0 0 900 501" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g onMouseOut={() => {setState("")}}>
              <path onClick={handleChlick} onMouseEnter={(e)=>{setState(e.target.id)}}id="14" d="M245 61V83L121.5 121L122.5 88.5L243 50V16H622.5H783.5L785.5 61H762V45.5H664V61H582V72H442V61H364.25V45.5H267.5V61H245Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
              <path onClick={handleChlick} onMouseEnter={() => {setState(13)}} id="13" d="M162.5 137.5L121 146L121.5 121L245.5 83.5V61H267.5V45H364.5V61H442.125V72H582V61H664.5V45H762.5V61H785.5L786.5 92.5H762.5V79H664.5V92.5H632V106.5H394.5V95H364.5V80H267.5V95H245.5V112.5L207 121V125.5L162.5 137.5Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
              <path onClick={handleChlick} onMouseEnter={() => {setState(12)}} id="12" d="M169 169H120.5L121 147L169.5 136L207 125.5V120.5L245 112.5V95H267V79.5H364V95H394V107H632V93H664V78.5H762V93H786.5L787 122H632V138H394V125L243.5 125.5V148H208V159H169V169Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
              <path onClick={handleChlick} onMouseEnter={() => {setState(11)}} id="11" d="M169 195L120 195.5L120.5 169H169V159H207.5V148H243V125H393.75L394 138H632V122H787L788 154.5H632V170H393.75V155H243V175.5H205V188H169V195Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
              <path onClick={handleChlick} onMouseEnter={() => {setState(10)}} id="10" d="M119.5 218L120 194.5H168.5V188H205V175.5H243V155.5H393.5V170H632V154.5H788L788.875 186H632V199H393.5V186.5H241V204H205V213.5H168.5V218.5L119.5 218Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
              <path onClick={handleChlick} onMouseEnter={() => {setState(9)}}  id="9"  d="M119 244L119.5 218L168.5 218.5V213.5H205V204H240.5V186.5H393.625V199H632V186H789L790 216.5L632.5 218.5L632 228H393.625V217.5H240.5V232H205V241H168.5V244H119Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
              <path onClick={handleChlick} onMouseEnter={() => {setState(8)}}  id="8"  d="M118 270.5L119 244.5H169V241H205V232.5H240.5V218H393.5V228H632V218H790L791 249H632V259H393.5V249.5H240.5V261.5H204V265H168.25V270L118 270.5Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
              <path onClick={handleChlick} onMouseEnter={() => {setState(7)}}  id="7"  d="M117.5 291.5L118 270.5H168.5V265H204V261.5H240.5V249H263.25H394V259H632V249H791L792 282L632 281V286H441.5V291.5H394V279.5H203V291.5H117.5Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
              <path onClick={handleChlick} onMouseEnter={() => {setState(6)}}  id="6"  d="M117 319L117.5 292L203.5 292.436V279.5H393.5V292.436H441.5V288L583.534 287.692H633V282H792L793 312.359H238.773V319H117Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8" />
              <path onClick={handleChlick} onMouseEnter={() => {setState(5)}}  id="5"  d="M794 346H116.5L117 319L240 320.109V313.002H793L794 346Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
              <path onClick={handleChlick} onMouseEnter={() => {setState(4)}}  id="4"  d="M115.643 372L116.5 346H794L795 372H115.643Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
              <path onClick={handleChlick} onMouseEnter={() => {setState(3)}}  id="3"  d="M140 395.676L115 393.5L115.625 372H795L795.5 407H552.5L547.5 392.588L526.5 382.294H498.5L479.5 392.588L475.5 407H395.5H267.5H262.5H237.5V400.824L197.5 400V395.676H164.5H140Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
              <path onClick={handleChlick} onMouseEnter={() => {setState(2)}}  id="2"  d="M124 423V395.5H197V400.5H237V407.5H475L479 393L498 382H526.5L547.5 393L552.5 407H783V445.5V446.5H546H476.5H254V436L124 423Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
              <path onClick={handleChlick} onMouseEnter={() => {setState(1)}}  id="1"  d="M124 460V423.5L254.5 436V446.5H783V480H254.5V470L124 460Z" stroke="#5282C1" strokeWidth="3" fillOpacity="0.2" fill="#c58ff8"/>
            </g>
          </svg>
          <div 
            style={{
              display: state  ? 'block' : 'none',
              position: 'fixed',
              top: y,
              left:x,
              zIndex: "103"
            }}
          >
          {(free?.length === 1)&&(  
            <div className="tooltip-wrapper" >
              <div className="tooltip-left-part  only-floor">
                <span className="building-number">{state}</span>
                <span className="building-text">հարկ</span>
              </div>
              {free?.map((free)=>
                <div className="tooltip-right-part" key ={free}>
                  <div className="houses-count">
                    <span>Ազատ է {free?.count} բնակարան</span>
                  </div>
                </div>
              )}
              
            </div>
            
        
          
          )}
          </div>
          


        </>

    )
}



