import React, { useState } from "react"
import { Close } from "../../../assets/index"
import axios from "axios"
import { useFormik } from "formik"
import * as Yup from "yup"

export default function BookAnApartment({number,number1}) {

    const API_URL = process.env.REACT_APP_API_URL
   
    const [isActive,setisActive] = useState(false)
    const formik = useFormik({
      initialValues: {
        fullName: '',
        email: '',
        phoneNumber: '',
        number: number?"N "+ number :"N " + number1
      },
      validationSchema: Yup.object({
        fullName: Yup.string().required(),
        email: Yup.string().email().required(),
        phoneNumber: Yup.number().min(9).required(),
      }),
      onSubmit: values => {
        axios.post(`${API_URL}/book`, {
            fullName : formik.values.fullName,
            email:formik.values.email,
            phoneNumber:formik.values.phoneNumber,
            number:formik.values.number
        })
        .then(res => res.data)
        .catch(errors =>console.log(errors))
        
        setisActive(!isActive)
      },
    })
    const closeBtn = () =>{
        setisActive(!isActive)
    }
    
    return (
        <div className={`ant-model-container ${isActive ? "ant-model-active" : ""}`}>
            <div className="ant-model">
                <div className="ant-modal-content">
                    <button type="button" className="ant-modal-close" onClick ={closeBtn}>
                        <span className="ant-modal-close-x">
                            <span className="anticon anticon-close ant-modal-close-icon">
                                 <Close />
                            </span> 
                        </span>
                    </button>
                    <div className="ant-modal-header">
                        <div className="ant-modal-title">
                            Ամրագրել բնակարան
                        </div>
                    </div>
                    <div className="model">
                        <div className="ant-modal-body">
                            <div className="custom-input-group">
                                <label>Անուն Ազգանուն</label>
                                <input 
                                    type="text" 
                                    name ="fullName"
                                    autoComplete="off"
                                    className={`${formik.touched.fullName && formik.errors.fullName ? "border-red" : ""}`}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.fullName} 
                                    onChange ={formik.handleChange} 
                                />
                            </div>
                            <div className="custom-input-group">
                                <label>Էլ․ հասցե</label>
                                <input 
                                    type="text"
                                    name="email"
                                    autoComplete="off"
                                    className={`${formik.touched.email && formik.errors.email ? "border-red" : ""}`}
                                    value ={formik.values.email}
                                    onChange ={formik.handleChange}
                                    onBlur={formik.handleBlur}  
                                />
                            </div>
                            <div className="custom-input-group">
                                <label>Հեռ․ համար</label>
                                
                                <input 
                                    type="text" 
                                    name="phoneNumber"
                                    autoComplete="off"
                                    className={`${formik.touched.phoneNumber && formik.errors.phoneNumber ? "border-red" : ""}`}
                                    value={formik.values.phoneNumber} 
                                    onChange ={formik.handleChange}
                                    onBlur={formik.handleBlur} 
                                />
                            </div> 
                            <div className="custom-input-group">
                                <label>Համար</label>
                                <input type="text" name="number" autoComplete="off" disabled value = {formik.values.number}  onChange ={formik.handleChange}/>
                            </div>
                        </div>
                        <div className="ant-modal-footer">
                            <button type="reset" className="ant-btn" onClick={ e => formik.resetForm()}>
                                <span>Չեղարկել</span>
                            </button>
                            <button type="submit"  className="ant-btn ant-btn-primary" onClick={formik.handleSubmit}>
                                <span>Ուղարկել</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}