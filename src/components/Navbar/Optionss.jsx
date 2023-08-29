import React, { useState } from 'react'
import { useEffect } from 'react'


const Optionss = ({data,source,destination,setSource,setDestination }) => {
    const [url,setUrl]=useState('63b85b1209f0a79e89e17e3a/flights?')
    console.log('datatype in option-- ',data)
    const[values,setValues]=useState([])
    const[res,setRes]=useState([])
    useEffect(()=>{
        if(data==='Train'){
            setUrl('63b85e152cabb8fdea2673ee/trains')
        }
        else if(data==='Flight'){
            setUrl('63b85b1209f0a79e89e17e3a/flights?')
        }
        else if(data==='Hotel'){
            setUrl('63b85bcf735f93791e09caf4/hotels')
        }
      fetch(`https://content.newtonschool.co/v1/pr/${url}`)
      .then((res)=>res.json())
      .then((val)=>setValues(val))
    },[data,url])

   useEffect(()=>{

       console.log(values,"values")
   },[data,values])

    return (
        <>
        {
            data === 'Hotel' ?<>
             <select onChange={(e)=>setSource(e.target.value)}>
             {
                 values&& values.map((opts,i)=><option key={i}>{opts.city}</option>)
                 
             }
         </select>
           
            </>:
            <>
             <select onChange={(e)=>setSource(e.target.value)}>
             {
                 values&& values.map((opts,i)=><option key={i}>{opts.from}</option>)
                 
                }
         </select>
        
        <select onChange={(e)=>setDestination(e.target.value)}>
             {
                 values&& values.map((opts,i)=><option>{opts.to}</option>)
                 
                }
         </select>
                </>
            
        }
        

        
        // </>
    )
}

// const DatePick(){
//     const [date,setDate]=useState();

//     return(
        
//     )
// }

export default Optionss