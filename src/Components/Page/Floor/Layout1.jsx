import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Layout1({rooms}) {
    const [state, setState] = useState("")
    const [number, setNumber] = useState("")
    const [color, setColor] = useState("")
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const { x, y } = position
    let navigate = useNavigate()
   
    const houseNumber = rooms.map((arr)=> arr.houseNumber)
    
    const id = rooms.map((arr) => arr._id)
    const badge = rooms.map((arr) => arr.badge)
    const area = rooms.map((arr) => arr.area)

    let className = []
    for (let i = 0; i < badge.length; i++) {
        if( badge[i] === "Առկա") {
            className.push("color-green")
        } else if (badge[i] === "Վաճառված") {
            className.push("color-red")
        } else {
            className.push("color-yellow")
        }
    }

    const handleMouseOver = (e) => {
        setNumber(+e.target.id)
        setColor(className.filter((arr,i) => i === +e.target.id-1))
    }
    
    const handleUrl = (e) => {
       const id1 = id.filter((arr,i) => i+1 === +number)
       navigate(`${id1}`)
    }

    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY })

    return(
        <div>
            <svg onMouseOver ={setFromEvent} width="2114" height="1504" viewBox="0 0 2125 1515" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g onMouseOut={() => {setState("")}} onMouseOver={handleMouseOver}> 
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[0]} id ="1" d="M342 1428.5H163V1386.5H216V1273H342V1428.5Z"strokeWidth="3"  fillOpacity="0.198426573" />
                    <path onClick={handleUrl} onMouseOver={() => {setState(4)}} className={className[1]} id ="2" d="M568.5 1273H342.5L344 1428.5H631V1396L612 1376.5L592.5 1352L578.5 1326.5H592.5L601 1318.5L606.5 1308L610 1296.5L611.5 1284.5V1273H568.5Z" strokeWidth="3" fillOpacity="0.198426573"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(3)}} className={className[2]} id ="3" d="M376.5 1277V1152.5H449.5V1123.5H538.5H636.5V1157.5L624 1167L614 1176L599.5 1193L583.5 1222.5H597L605 1229L611.5 1241L614 1251L615.5 1264.5V1277H376.5Z"  strokeWidth="3" fillOpacity="0.198426573"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(3)}} className={className[3]} id ="4" d="M375.5 1233H309V1157H341.5V1114H309V1029.5H137.5V964H451V984.5H465.5L473.5 992.5L478.5 1007V1028L477 1038.5L473.5 1047L467.5 1053.5H449V1152.5H375.5V1233Z"  strokeWidth="3"  fillOpacity="0.198426573"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(2)}} className={className[4]} id ="5" d="M133.5 1153V1025H305.5V1110H338V1153H305.5V1228.5H248.5V1153H133.5Z"  strokeWidth="3" fillOpacity="0.198426573" />
                    <path onClick={handleUrl} onMouseOver={() => {setState(2)}} className={className[5]} id ="6" d="M342 878.5V829H164.5V815.5V812.5H155.5L151 815.5L147.5 819.5L145 823.5L142.5 829L140.5 833L138 840.5L137 845.5L136 852.5V866V878.5V886.5L137 895L140 902L142.5 908L146.5 914.5L151 919.5L155 923H164.5V950.5H475.5V878.5H342Z"  strokeWidth="3"  fillOpacity="0.198426573" />
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[6]} id ="7" d="M168.5 832.5V712H303.5V832.5H168.5Z" stroke="rgb(245, 166, 35)" strokeWidth="3" fill="rgb(245, 166, 35)" fillOpacity="0.198426573"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(3)}} className={className[7]} id ="8" d="M168 711H304M168 711H347.5V754.5H438V778H478V618H341.5V578.5H168V618H162L155 622L150 629L145.5 637L141 649L139 660V672V687.5L141 699L144 711L148.5 717L153 722.5L160 728.5H168V711Z" strokeWidth="3" fillOpacity="0.198426573"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(2)}} className={className[8]} id ="9" d="M134.5 575V438.5H302V575H162H134.5Z"  strokeWidth="3"  fillOpacity="0.198426573"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(2)}} className={className[9]} id="10" d="M193.5 199V173H239V325H302V438H135.5V199H193.5Z" strokeWidth="3"  fillOpacity="0.198426573"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(3)}} className={className[10]} id="11" d="M384.5 200V173H239V324H302.5H343.5V398H445.5V200H384.5Z"  strokeWidth="3"  fillOpacity="0.198426573" />
                    <path onClick={handleUrl} onMouseOver={() => {setState(3)}} className={className[11]} id="12" d="M453 438V274.5H543.5V434.5H662V560H626.5V576.5L623 581.5L617.5 585L609 587.5H573.5L566.5 585L562.5 581.5L560 576.5V560H453V438Z" strokeWidth="3"  fillOpacity="0.198426573" />
                    <path onClick={handleUrl} onMouseOver={() => {setState(4)}} className={className[12]} id="13" d="M787 276.5V293L753 303L724 309L705 312L692.5 313.5H643.5L631 312L607.5 309L582 303L559.5 297.5L545 293V434H661V560H773V577L778 583L784.5 586.5L793 588.5L802.5 589.5H812.5L822 588.5L829 586.5L836 583L842 577V560H878V276.5H787Z" strokeWidth="3" fillOpacity="0.198426573"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(3)}} className={className[13]} id="14" d="M886 320.5V201H946.5V173H1094V360H1026.5V396.5H892V320.5H886Z"  strokeWidth="3"  fillOpacity="0.198426573"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(2)}} className={className[14]} id="15" d="M1093.5 359.5V173H1139V198.5H1197.5V394H1165L1098 466.5L1026.5 397V359.5H1093.5Z"strokeWidth="3"  fillOpacity="0.198426573" />
                    <path onClick={handleUrl} onMouseOver={() => {setState(4)}} className={className[15]} id="16" d="M1097.5 466.5L973 594M973 594L1057.5 677L1048 688L1046 692.5V697L1047 701.5L1049.5 707L1054 714L1061 722L1068 728L1077 734L1085.5 737H1092L1097.5 734.5L1106.5 724L1097.5 715L1308.5 490L1221.5 407.5L1201.5 430L1197.5 426V394H1165L973 594Z"   strokeWidth="3" fillOpacity="0.198426573" />
                    <path onClick={handleUrl} onMouseOver={() => {setState(4)}} className={className[16]} id="17" d="M1097.5 715L1309.5 490L1359 538L1340 558L1375.5 592.5L1382 586.5L1396.5 585.5L1408 589.5L1421 596.5L1431.5 604.5L1442 614.5L1450.5 624L1455 631.5L1459.5 640.5L1462 651V661.5L1456 669L1496.5 708L1402 808L1273 685.5L1245.5 714.5L1217 686.5L1146 760.5L1097.5 715Z"  strokeWidth="3"  fillOpacity="0.198426573" />
                    <path onClick={handleUrl} onMouseOver={() => {setState(2)}} className={className[17]} id="18" d="M1260 870L1330.5 795.5L1449 903V947H1342.5L1260 870Z"  strokeWidth="3" fillOpacity="0.198426573" />
                    <path onClick={handleUrl} onMouseOver={() => {setState(3)}} className={className[18]} id="19" d="M1375.5 835.5L1516 687.5L1653 818V947H1447.5V902.5L1375.5 835.5Z" strokeWidth="3"  fillOpacity="0.198426573"  />
                    <path onClick={handleUrl} onMouseOver={() => {setState(3)}} className={className[19]} id="20" d="M1483.5 1107V1024H1656V960H1342V980H1326L1320 986L1315 992L1313.5 999V1011V1022.5L1315 1035L1320 1043.5L1326 1048.5H1342L1343 1150.5H1417.5V1228.5H1483.5V1150.5H1448V1107H1483.5Z"  strokeWidth="3"  fillOpacity="0.198426573" />
                    <path onClick={handleUrl} onMouseOver={() => {setState(2)}} className={className[20]} id="21" d="M1656 1024H1484V1106.5H1447V1151H1484V1228.5H1539.5V1151H1656V1024Z" strokeWidth="3"  fillOpacity="0.198426573"  />
                    <path onClick={handleUrl} onMouseOver={() => {setState(2)}} className={className[21]} id="22" d="M1158 1120.5H1343V1150H1418V1273.5H1177V1258L1179.5 1244L1182 1235L1189 1224L1197 1218H1209L1187 1181.5L1158 1153V1120.5Z"  strokeWidth="3" fillOpacity="0.198426573"/>
                    <path onClick={handleUrl} onMouseOver={() => {setState(3)}} className={className[22]} id="23" d="M1177 1287.5V1273.5H1448.5V1427.5H1158L1157.5 1393L1161 1391.5L1180.5 1373.5L1193.5 1356L1207.5 1329L1199 1326.5L1190.5 1320.5L1185.5 1312.5L1180.5 1300L1177 1287.5Z"  strokeWidth="3"  fillOpacity="0.198426573" />
                    <path onClick={handleUrl} onMouseOver={() => {setState(1)}} className={className[23]} id="24"d="M1571.5 1273.5H1447.5V1427.5H1625.5V1388.5H1571.5V1273.5Z"  strokeWidth="3" fillOpacity="0.198426573" /> 
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
                        {houseNumber.map((arr,i)=>i+1 === number 
                            ? <div className="tooltip-left-part" key ={i}>
                                <span className="building-number">N {arr}</span> 
                            </div>
                            : null
                        )}
                        {area.map((arr,i)=>i+1 === number 
                            ? <div className="tooltip-right-part" key ={i}>
                               <span className="floors-count">{state} սենյակ</span>
                               <span className="houses-count">{arr} մ <sup>2</sup></span>
                            </div>
                            : null
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}