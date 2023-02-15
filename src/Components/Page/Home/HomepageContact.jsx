import React,{useState} from "react";
import {postSubscribeAction} from "../../../redux/actions/mainAction"
import { useDispatch} from 'react-redux'

export default function HomepageContact(){
    const dispatch = useDispatch()
    const [data, setdata] = useState("");

    const handlerChange = (event) => {
		setdata(event.target.value)
	}
    const heandleSubmit = (e) => { 
        e.preventDefault()
        dispatch(postSubscribeAction(data))
        setdata("")
	}
    return(
      <div className="HomepageContact">
        <div className="LeftSide">
          <h1 className="title">Եղեք ավելի տեղեկացված</h1>
          <div className="description">
            Բաժանորդագրվեք մեր նոր նախագծերի, հասանելի բնակարանների և 
            առաջիկա միջոցառումների մասին տեղեկացված լինելու համար
          </div>
        </div>
        <form className="RightSide" onSubmit={heandleSubmit}>
          <div className="custom-input-group">
            <input 
              type="text" name="email" 
              placeholder="Էլ․ հասցե" 
              autoComplete="off" 
              maxLength="100" 
              className="undefined" 
              value={data} 
              onChange={handlerChange}/>
          </div>
          <button className="PrimaryButton" type="submit">Բաժանորդագրվել</button>
        </form>
      </div>
    )
}