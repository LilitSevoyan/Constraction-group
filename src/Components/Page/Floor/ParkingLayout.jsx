import React,{useState} from "react";
import {useNavigate} from "react-router-dom"

export default function ParkingLayout({ rooms}){

    const houseNumber = rooms.map((arr)=> arr.houseNumber)
    const id = rooms.map((arr)=> arr._id)
    const badge = rooms.map((arr)=>arr.badge)

    const [state, setState] = useState("");
    const [number, setNumber] = useState("");
    const [color, setColor] = useState("");
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { x, y } = position
    let navigate = useNavigate();
    
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
    const handleUrl = (e)=>{
        const id1 = id.filter((arr,i)=>i+1 === +number)
        navigate(`${id1}`)
    }
    const handleMouseOver =(e) =>{
        setNumber(+e.target.id)
        setColor(className.filter((arr,i) => i === +e.target.id-1))
        
    }

   
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    return(
        <div>
            <svg onMouseOver ={setFromEvent} width="1811" height="1268" viewBox="0 0 1811 1275" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g onMouseOut={() => {setState("")}}  onMouseOver={handleMouseOver}> 
                
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[0]} id="1" d="M201.736 838.5V737H250.758V838.5H201.736Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[1]} id="2" d="M301.833 838.5V737H250.501V838.5H301.833Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[2]} id="3" d="M311.073 838.5V737H359.325V838.5H311.073Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[3]} id="4" d="M411.684 838.5V737H360.352V838.5H411.684Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[4]} id="5" d="M581.08 838.5V737H529.748V838.5H581.08Z"    fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[5]} id="6" d="M631.386 838.5V737H580.054V838.5H631.386Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[6]} id="7" d="M640.626 838.5V737H688.878V838.5H640.626Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[7]} id="8" d="M741.237 838.5V737H689.905V838.5H741.237Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[8]} id="9" d="M750.477 838.5V737H798.729V838.5H750.477Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[9]} id="10" d="M851.088 838.5V737H799.756V838.5H851.088Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[10]} id="11" d="M970.179 838.5V737H1018.43V838.5H970.179Z"fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[11]} id="12" d="M1070.79 838.5V737H1019.46V838.5H1070.79Z"fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[12]} id="13" d="M1146.76 838.5V737H1095.43V838.5H1146.76Z"fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[13]} id="14" d="M1159.08 838.5V737H1207.33V838.5H1159.08Z"fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[14]} id="15" d="M1259.69 838.5V737H1208.36V838.5H1259.69Z"fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[15]} id="16" d="M1386.55 836.936L1282.35 836.563L1282.53 789.563L1386.73 789.937L1386.55 836.936Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[16]} id="17" d="M1386.92 738.937L1282.72 738.564L1282.53 788.563L1386.74 788.937L1386.92 738.937Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[17]} id="18" d="M1385.97 729.5V628H1334.64V729.5H1385.97Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[18]} id="19" d="M1285.36 729.5V628H1333.61V729.5H1285.36Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[19]} id="20" d="M1258.67 712V627H1215.55V712H1258.67Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[20]} id="21" d="M1171.4 712V627H1214.52V712H1171.4Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[21]} id="22" d="M1166.27 712V627H1123.15V712H1166.27Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[22]} id="23" d="M1079 712V627H1122.12V712H1079Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[23]} id="24" d="M1062.58 712V627H1019.46V712H1062.58Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[24]} id="25" d="M975.312 712V627H1018.43V712H975.312Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[25]} id="26" d="M961.965 712V627H918.846V712H961.965Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[26]} id="27" d="M874.701 712V627H917.82V712H874.701Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[27]} id="28" d="M851.088 712V627H799.756V712H851.088Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[28]} id="29" d="M750.477 712V627H798.729V712H750.477Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[29]} id="30" d="M740.21 712V627H688.878V712H740.21Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[30]} id="31" d="M639.599 712V627H687.852V712H639.599Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[31]} id="32" d="M631.386 712V627H580.054V712H631.386Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[32]} id="33" d="M530.775 712V627H579.027V712H530.775Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[33]} id="34" d="M521.535 712V627H479.443V712H521.535Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[34]} id="35" d="M438.377 712V627H478.416V712H438.377Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[35]} id="36" d="M411.684 712V627H360.352V712H411.684Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[36]} id="37" d="M311.073 712V627H359.325V712H311.073Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[37]} id="38" d="M420.924 524V439H469.176V524H420.924Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[38]} id="39" d="M521.535 524V439H470.203V524H521.535Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[39]} id="40" d="M531.802 524V439H580.054V524H531.802Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[40]} id="41" d="M632.413 524V439H581.081V524H632.413Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[41]} id="42" d="M638.573 524V439H686.825V524H638.573Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[42]} id="43" d="M739.184 524V439H687.851V524H739.184Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[43]} id="44" d="M750.477 524V439H798.729V524H750.477Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[44]} id="45" d="M851.088 524V439H799.756V524H851.088Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[45]} id="46" d="M876.754 524V439H917.82V524H876.754Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[46]} id="47" d="M961.965 524V439H918.846V524H961.965Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[47]} id="48" d="M970.179 524V439H1018.43V524H970.179Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[48]} id="49" d="M1070.79 524V439H1019.46V524H1070.79Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[49]} id="50" d="M1080.03 524V439H1122.12V524H1080.03Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[50]} id="51" d="M1168.32 524V439H1123.15V524H1168.32Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[51]} id="52" d="M1175.51 524V439H1214.52V524H1175.51Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[52]} id="53" d="M1257.64 524V439H1215.55V524H1257.64Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[53]} id="54" d="M1386.55 516.936L1282.35 516.563L1282.53 469.563L1386.73 469.937L1386.55 516.936Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[54]} id="55" d="M1386.92 418.937L1282.72 418.564L1282.53 468.563L1386.74 468.937L1386.92 418.937Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[55]} id="56" d="M1386.55 409.936L1282.35 409.563L1282.53 362.563L1386.73 362.937L1386.55 409.936Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[56]} id="57" d="M1386.92 311.937L1282.72 311.564L1282.53 361.563L1386.74 361.937L1386.92 311.937Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[57]} id="58" d="M1386.55 301.936L1282.35 301.563L1282.53 254.563L1386.73 254.937L1386.55 301.936Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[58]} id="59" d="M1386.92 203.937L1282.72 203.564L1282.53 253.563L1386.74 253.937L1386.92 203.937Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[59]} id="60" d="M1605.6 205.937L1501.4 205.564L1501.21 255.563L1605.41 255.937L1605.6 205.937Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[60]} id="61" d="M1605.23 303.936L1501.03 303.563L1501.2 256.563L1605.41 256.937L1605.23 303.936Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[61]} id="62" d="M1605.6 418.937L1501.4 418.564L1501.21 468.563L1605.41 468.937L1605.6 418.937Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[62]} id="63" d="M1605.23 516.936L1501.03 516.563L1501.2 469.563L1605.41 469.937L1605.23 516.936Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[63]} id="64" d="M1605.6 525.937L1501.4 525.564L1501.21 575.563L1605.41 575.937L1605.6 525.937Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[64]} id="65" d="M1605.23 623.936L1501.03 623.563L1501.2 576.563L1605.41 576.937L1605.23 623.936Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[65]} id="66" d="M1605.6 631.937L1501.4 631.564L1501.21 681.563L1605.41 681.937L1605.6 631.937Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[66]} id="67" d="M1605.23 729.936L1501.03 729.563L1501.2 682.563L1605.41 682.937L1605.23 729.936Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[67]} id="68" d="M201.222 1030V945H249.474V1030H201.222Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[68]} id="69" d="M201.222 1113V1028H249.474V1113H201.222Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[69]} id="70" d="M301.833 1030V945H250.501V1030H301.833Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[70]} id="71" d="M301.833 1113V1028H250.501V1113H301.833Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[71]} id="72" d="M311.073 1029V944H359.325V1029H311.073Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[72]} id="73" d="M311.073 1113V1028H359.325V1113H311.073Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[73]} id="74" d="M411.684 1029V944H360.352V1029H411.684Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[74]} id="75" d="M411.684 1113V1028H360.352V1113H411.684Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[75]} id="76" d="M420.924 1029V944H469.176V1029H420.924Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[76]} id="77" d="M420.924 1113V1028H469.176V1113H420.924Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[77]} id="78" d="M521.535 1029V944H470.203V1029H521.535Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[78]} id="79" d="M521.535 1113V1028H470.203V1113H521.535Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[79]} id="80" d="M530.775 1029V944H579.027V1029H530.775Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[80]} id="81" d="M530.775 1113V1028H579.027V1113H530.775Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[81]} id="82" d="M631.386 1029V944H580.054V1029H631.386Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[82]} id="83" d="M631.386 1113V1028H580.054V1113H631.386Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[83]} id="84" d="M640.626 1029V944H688.878V1029H640.626Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[84]} id="85" d="M640.626 1113V1028H688.878V1113H640.626Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[85]} id="86" d="M741.237 1029V944H689.905V1029H741.237Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[86]} id="87" d="M741.237 1113V1028H689.905V1113H741.237Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[87]} id="88" d="M750.477 1029V944H798.729V1029H750.477Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[88]} id="89" d="M750.477 1113V1028H798.729V1113H750.477Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[89]} id="90" d="M851.088 1029V944H799.756V1029H851.088Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[90]} id="91" d="M851.088 1113V1028H799.756V1113H851.088Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[91]} id="92" d="M861.354 1029V944H909.607V1029H861.354Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[92]} id="93" d="M861.354 1113V1028H909.607V1113H861.354Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[93]} id="94" d="M961.965 1029V944H910.633V1029H961.965Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[94]} id="95" d="M961.965 1113V1028H910.633V1113H961.965Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[95]} id="96" d="M970.179 1029V944H1018.43V1029H970.179Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[96]} id="97" d="M970.179 1113V1028H1018.43V1113H970.179Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[97]} id="98" d="M1070.79 1029V944H1019.46V1029H1070.79Z"  fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[98]} id="99" d="M1070.79 1113V1028H1019.46V1113H1070.79Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[99]} id="100" d="M1146.76 1029V944H1095.43V1029H1146.76Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[100]} id="101" d="M1146.76 1114V1029H1095.43V1114H1146.76Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[101]} id="102" d="M1175.51 1029V944H1214.52V1029H1175.51Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[102]} id="103" d="M1175.51 1113V1028H1214.52V1113H1175.51Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[103]} id="104" d="M1256.61 1029V944H1215.55V1029H1256.61Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[104]} id="105" d="M1256.61 1113V1028H1215.55V1113H1256.61Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[105]} id="106" d="M1284.33 1029V944H1332.58V1029H1284.33Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[106]} id="107" d="M1284.33 1113V1028H1332.58V1113H1284.33Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[107]} id="108" d="M1384.94 1029V944H1333.61V1029H1384.94Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[108]} id="109" d="M1384.94 1113V1028H1333.61V1113H1384.94Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[109]} id="110" d="M1396.24 1029V944H1444.49V1029H1396.24Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[110]} id="111" d="M1396.24 1113V1028H1444.49V1113H1396.24Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[111]} id="112" d="M1496.85 1029V944H1445.51V1029H1496.85Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[112]} id="113" d="M1496.85 1113V1028H1445.51V1113H1496.85Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[113]} id="114" d="M1504.03 1029V944H1552.29V1029H1504.03Z" fillOpacity="0.198426573" strokeWidth="3"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[114]} id="115" d="M1604.64 1029V944H1553.31V1029H1604.64Z" fillOpacity="0.198426573" strokeWidth="3"/>
                
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
                            :null
                        )}
                        
                    </div>
                )}
            </div>
            
        </div>
    )
}