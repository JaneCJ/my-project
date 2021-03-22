import React, {useState, useEffect} from 'react';

function FunctionComp() {
    const [date,setDate] = useState(new Date());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setDate(new Date())
        },1000)

        return ()=>{
            clearInterval(timer);
        }
    },[])
    return (
        <div>
            <h3>FunctionComp</h3>
            <div>{date.toLocaleTimeString()}</div>
        </div>
    )
}

export default FunctionComp
