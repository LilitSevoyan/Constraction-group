import React,{useState} from "react";
import {useNavigate} from "react-router-dom"

export default function Layout({rooms}){
    const [state, setState] = useState("");
    const [number, setNumber] = useState("");
    const [color, setColor] = useState("");
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { x, y } = position
    let navigate = useNavigate();

    const houseNumber = rooms.map((arr)=> arr.houseNumber)
    const id = rooms.map((arr)=> arr._id)
    const badge = rooms.map((arr)=>arr.badge)
    const area = rooms.map((arr)=> arr.area)
    
    
    let className = [];
    for(let i=0; i< badge.length; i++){
        if(badge[i] === "Առկա"){
            console.log(badge[i])
            className.push("color-green");
        }else if(badge[i] === "Վաճառված"){
            className.push("color-red")
        }else{
            className.push("color-yellow")
        }
    }

    const handleMouseOver =(e) =>{
        setNumber(+e.target.id)
        setColor(className.filter((arr,i) => i === +e.target.id-1))
    }
    const handleUrl = (e)=>{
        const id1 = id.filter((arr,i)=>i+1 === +number)
        navigate(`${id1}`)
     }
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    return(
    
         <div>
             <svg onMouseOver ={setFromEvent} width="848" height="594" viewBox="0 0 2179 1523" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g onMouseOut={() => {setState("")}} onMouseOver={handleMouseOver}> 
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[0]} id="1"  d="M771 1412H583V1282H711V1293.5L716.5 1322L727 1352.5L744.5 1377L771 1404V1412Z" strokeWidth="3" fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[1]} id="2" d="M384 1254V1157H770V1166L751.5 1183.5L734 1204.5L717.5 1238L710 1284H583.5V1412H353V1404V1254H384Z" strokeWidth="3" fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[2]} id="3" d="M298 1121V967H586V1121H298Z"  strokeWidth="3" fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[3]} id="4" d="M298 962V721H480.36V893H585V962H298Z" strokeWidth="3"  fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[4]} id="5" d="M298 719V588H483.5V656H586V760H481V719H298Z"  strokeWidth="3" fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[5]} id="6" d="M298 588V207H588V410H483V588H298Z"  strokeWidth="3" fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[6]} id="7" d="M740 575V284H589V575H740Z" strokeWidth="3"  fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[7]} id="8" d="M1017 576V285H866V576H1017Z" strokeWidth="3" fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[8]} id="9"  d="M1308.5 207.5H1019.5L1020 412H1123V483.5L1176 532L1308.5 399V207.5Z" strokeWidth="3" fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[9]} id="10" d="M1309.5 401L1105 606L1281 775L1358.5 697.5L1436.5 771.5L1562.5 641.5L1309.5 401Z"  strokeWidth="3"  fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[10]} id="11" d="M1592 963H1478L1395 883L1475.5 802L1592 912.5V963Z" strokeWidth="3"  fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[11]} id="12" d="M1680.5 878V869L1573 769L1631.5 708L1767 836V940V966H1680.5V878Z"  strokeWidth="3"  fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[12]} id="13" d="M1478 1120V964H1592V1067H1667V966.5H1767V1120H1478Z" strokeWidth="3"  fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[13]} id="14" d="M1677.5 1253V1161V1154H1289.5V1165L1302 1173L1314.5 1186L1330.5 1205L1341.5 1228.5L1348.5 1253L1352 1271.5V1285H1481.5L1482.5 1415.5H1710.5V1397V1253H1677.5Z" strokeWidth="3" fillOpacity="0.198426573"/>
                        <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[14]} id="15" d="M1350 1306.5L1352.5 1285H1481V1416H1290.5V1403L1304 1393.5L1317 1380.5L1329 1364.5L1339 1347.5L1346.5 1323.5L1350 1306.5Z"  strokeWidth="3"  fillOpacity="0.198426573"/>
                    </g>
                </svg>
       
         <div 
         style={{
           display: state ? 'block' : 'none',
           position: 'fixed',
           top: y,
           left:x,
           zIndex: "1000"
         }}
     >
         {state && (
             <div className={`tooltip-wrapper ${color}`}>
                {houseNumber.map((arr,i)=>i+1 === number ?
                    <div className="tooltip-left-part" key ={i}>
                        <span className="building-number">N {arr}</span> 
                    </div>
                :null)}
                    {area.map((arr,i)=>i+1 === number ?
                    <div className="tooltip-right-part" key ={i}>
                        <span className="floors-count">մակերես</span>
                        <span className="houses-count">{arr} մ <sup>2</sup></span>
               </div>
               :null)}
             </div>
         )}
        </div>
     </div>
    )
}