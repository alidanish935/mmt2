import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ReactDom from 'react-dom';
import './Modal.css'

// Line no 7 & 9 to 13 comment out krte hai to code give error "modle is not define"



    const Modal = ({ setData, data, modelData, index, fakeString }) => {
        

            const [cardName,setCardName] =useState('')
            const [cardNum,setCardNum] =useState('')
            const [cardExp,setCardExp] =useState('')
            const [cardCvv,setCardCvv] =useState('')
            const [error,setError]=useState(false)

        const handleSubmit =(e)=>{
            e.preventdefault()
            if(cardName.length==0 || cardNum.length==0 || cardExp.length==0 || cardCvv==0){
                setError(true)
            }
            
            console.log(cardName,cardNum,cardExp,cardCvv)
        }
        const cancel = () => {
            let list = [...data]
            list[index].isAnkur = !list[index].isAnkur
            setData(list)
        }
        //efine
        const tempnavi = useNavigate();
        // console.log(modelData)
        const [success, setSuccess] = useState(false);
        return (
            <>
                <div className='modalCss'>
                    <div className='MMTmodal'>
                        
                        <form onSubmit={handleSubmit}>
                        <div><h3 style={{ textAlign: "center" }}>Payment Method </h3></div>
                        <div className='PaymentInput'>
                            <input
                                onChange={(e)=>setCardName(e.target.value)} 
                                type="text" placeholder='Name on Card' />
                        </div>
                        {error?
                    <label>required</label>:""}
                        <div className='PaymentInput'>
                            <input
                                onChange={(e)=>setCardNum(e.target.value)} 
                                type="number" placeholder='Card Number' />
                        </div>
                        {error?
                    <label>required</label>:""}
                        <div className='PaymentInput'>
                            <input
                                onChange={(e)=>setCardExp(e.target.value)} 
                                type="year" placeholder='Exp mm/yy' required />
                        </div>
                        {error?
                    <label>required</label>:""}
                        <div className='PaymentInput'>
                            <input
                                onChange={(e)=>setCardCvv(e.target.value)} 
                                type="number" placeholder='CVV' />
                        </div>
                        {error?
                    <label>required</label>:""}
                        <div className='btnPay'>
                            <button className='cancel' style={{ backgroundColor: "rgb(220,53,69)" }} onClick={cancel}>Cancel</button>

                            <Link to="/modal2">
                                <button className='pay' onClick={() => { setSuccess(true) }}>Pay</button>
                            </Link>
                        </div>
                    </form>

                
                </div>
            </div >
        </>

    )
                        }


    



export default Modal