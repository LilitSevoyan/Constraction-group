import React, { useState } from "react"
import { ABB, Dram } from "../../../assets/index"

export default function CalcMainContent() {

  const [state, setState] = useState({inputClass: ""})
  const [addcontent, setAddcontent] = useState(false)
  const [months, setMonths] = useState("")
  const [percent, setPercent] = useState("")
  const [pay, setPay] =useState("")
  const [data, setdata] = useState({
    loanType: "cash",
		percent:"12",
		hypothecAmount: "",
		advancePayment: "",
    monthsCount: "20",
    termType:"year",
	})

  const posts = [
    {id:1, title: 'Ամսական վճար (֏)', text:pay, svg:<Dram/> },
    {id:2, title: 'Ժամկետ (Տարի)', text: data.monthsCount, svg:data.termType === "year" ?" Տարի" :" Ամիս"},
    {id:3, title: 'Տարեկան տոկոսադրույք (%)', text: data.percent, svg:" %"},
    {id:4, title: 'Բնակարանի արժեքը', text: data.hypothecAmount, svg:<Dram/>},
    {id:5, title: 'Կանխավճար', text: data.advancePayment, svg:<Dram/>},
    {id:6, title: 'Տոկոս', text:0, svg:<Dram/>}
  ]

  const content = posts.map((post) =>
    post.text 
      ? (<div className="result-box-row" key={post.id}>
          <div className="result-box-row-title">{post.title}</div>
          <div className="result-box-row-text">{post.text}{post.svg}</div>
        </div>)
      : null
  )

  const handleChange = (e) => {
    let numbers = /^[0-9]+$|^$/
    if (e.target.type === "text") {
      if (e.target.value.match(numbers)) {
        setdata({ ...data,[e.target.name]: e.target.value })
        if (data.hypothecAmount !== "") {
          handleKeyUp(e)
        }
      }
    } else {
      setdata({ ...data,[e.target.name]: e.target.value }) 
    }
    setState({inputClass: ""}) 
  }

  const handleKeyUp = (e) => {
    data.advancePayment = Math.round(+data.hypothecAmount * 10 / 100)
    setdata({...data,[e.target.name]: e.target.value })
  }

  const calc = (hypothecAmount,advancePayment,percent,monthsCount) => {
    const S = hypothecAmount-advancePayment
    const M = percent/100/12
    setPay(Math.ceil(S * M / (1 - Math.pow(1 + M, -monthsCount))))
  }

  const arr = []
  if (data.termType === "year") {
    const monthsCount = data.monthsCount * 12
    for (let i= 0; i< monthsCount; i++) {
      arr.push(i+1)
    }
  } else {
    for (let i = 0; i < data.monthsCount; i++) {
      arr.push(i+1)
    }
  }

  const handleSubmit = (e) => { 
		e.preventDefault()
    setAddcontent(true)
    if (data.hypothecAmount !== "") {
      if (data.termType === "year") {
        const monthsCount = data.monthsCount * 12
        calc(data.hypothecAmount,data.advancePayment,data.percent,monthsCount)
      } else {
        calc(data.hypothecAmount,data.advancePayment,data.percent,data.monthsCount)
      }
      const S = data.hypothecAmount - data.advancePayment
      setMonths(S / 100)
      setPercent(pay - months)
      
      for (let i = 0; i < data.monthsCount; i++) {
      
      }
      
    }else{
      setState({inputClass: "invalid"})
    }    
	}

  const handleDelete = (e) => {
      e.preventDefault()
      setdata({
        termType: "cash",
        percent:"12",
        hypothecAmount: "",
        advancePayment: "",
        monthsCount: "20"
      })
  }

  return (
    <>
      <div className="CalcMainContent">
        <div className="LeftSide">
          <div className="calc-title">
            <span>Հիփոթեքի հաշվիչ</span>
            <div className="bank-icon-wrapper">
              <img src={ABB} alt="ABB BANK" />
            </div>
          </div>
          <div className="fields-horizontal">
            <div className="custom-input-group">
              <label >Բանկ</label>
              <select className="ant-select custom-select   ant-select-single ant-select-show-arrow" 
                name="loanType" 
                value={data.loanType}
                onChange={handleChange}>
                  <option value="cash ">ԿԱՆԽԻԿ՝ Փուլային մարում</option>
                  <option value="credit">ՎԱՐԿԱՅԻՆ</option>
                </select>
            </div>
            <div className="custom-input-group" id="bank">
              <label>Տարեկան տոկոսադրույք (%)</label>
              <input type="text" name="percent" placeholder="Տարեկան տոկոսադրույք" autoComplete="off" className="undefined" 
                onChange={handleChange} 
                value={data.percent}/>
            </div>
          </div>
          <div className="custom-input-group" id="percent">
            <label>Բնակարանի արժեքը</label>
            <input type="text" name="hypothecAmount" placeholder="Բնակարանի արժեքը" autoComplete="off" id="a"
              onKeyUp={handleKeyUp}
              className={state.inputClass }
              onChange={handleChange} 
              value={data.hypothecAmount} />
          </div>
          <div className="custom-input-group" id="advancePayment">
            <label>Կանխավճար</label>
            <input  type="text" name="advancePayment" placeholder="Կանխավճար" autoComplete="off" className="undefined" 
              onChange={handleChange} 
              value={data.advancePayment}/>
          </div>
          <div className="fields-horizontal">
            <div className="custom-input-group" id="monthsCount">
              <label>Ժամկետ</label>
              <input type="text" name="monthsCount" placeholder="Ժամկետ" autoComplete="off" className="undefined" 
                onChange={handleChange} 
                value={data.monthsCount}/>
            </div>
            <div className="custom-input-group" id="termType">
              <label>Տեսակ</label>
              <select className="ant-select custom-select   ant-select-single ant-select-show-arrow" name="termType"
                value={data.termType}
                onChange={handleChange}
              >
                <option value="year">Տարի</option>
                <option value="month">Ամիս</option>
              </select>
            </div>
          </div>
          <div className="btnsWrapper">
            <button className="PrimaryButton dark" onClick={handleDelete}> 
              <span className="title">Չեղարկել</span>
            </button>
            <button className="PrimaryButton " onClick={handleSubmit}>
              <span className="title">Հաշվել</span>
            </button>
          </div>
        </div>
        {addcontent 
          ? (<div className="RightSide">
              <div className="calc-title">Վճար (֏)</div>
              <div className="result-box">
                {content}
              </div>
            </div>)
          : null
        } 
      </div>
      {addcontent 
        ? (<div className="results-table">
            <table>
              <thead>
                <tr>
                  <th>Ամիս</th>
                  <th>Վճարվող տոկոսագումար</th>
                  <th>Մայր գումար</th>
                  <th>Ընդամենը վճարում</th>
                </tr>
              </thead>
              <tbody>
                {arr.map((arr,i)=>
                <tr>
                  <td>{arr}</td>
                  <td>{months}</td>
                  <td>{percent}</td>
                  <td>{pay}</td>
                </tr>
                )}
              </tbody>
            </table>
          </div>)
        : null
      }    
    </>    
  )
}
