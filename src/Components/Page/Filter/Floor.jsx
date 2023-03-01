import React from "react"

export default function Floor({data, setData, toggle, setToggle}) {
 
    const clickFloor = async(e) => {
        const floor  =+ e.target.firstChild.nodeValue
        setData({...data, floor: floor})
        setToggle(!toggle)
    }

    return (
        <div className="ant-dropdown-open">
            <div className="filter-floors-list">
                <div onClick={clickFloor}>
                    <div className={data.floor === 1 ? "list-item filter-active" : "list-item"}>1</div>
                    <div className={data.floor === 2 ? "list-item filter-active" : "list-item"}>2</div>
                    <div className={data.floor === 3 ? "list-item filter-active" : "list-item"}>3</div>
                    <div className={data.floor === 4 ? "list-item filter-active" : "list-item"}>4</div>
                    <div className={data.floor === 5 ? "list-item filter-active" : "list-item"}>5</div>
                    <div className={data.floor === 6 ? "list-item filter-active" : "list-item"}>6</div>
                    <div className={data.floor === 7 ? "list-item filter-active" : "list-item"}>7</div>
                    <div className={data.floor === 8 ? "list-item filter-active" : "list-item"}>8</div>
                    <div className={data.floor === 9 ? "list-item filter-active" : "list-item"}>9</div>
                    <div className={data.floor === 10 ? "list-item filter-active" : "list-item"}>10</div>
                    <div className={data.floor === 11 ? "list-item filter-active" : "list-item"}>11</div>
                    <div className={data.floor === 12 ? "list-item filter-active" : "list-item"}>12</div>
                    <div className={data.floor === 13 ? "list-item filter-active" : "list-item"}>13</div>
                    <div className={data.floor === 14 ? "list-item filter-active" : "list-item"}>14</div>
                </div>
            </div>
        </div>
    )
}