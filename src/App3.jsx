import React ,{useState,useEffect}from 'react'

const App3 = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
    console.log("hii")
    
    },[count])

    useEffect(()=>{
        console.log('count changed',count)
        return()=>{
            console.log("cleanup for count",count);
            
        }


    
 },[count])

  return (
    <div>
         <h2>Counter:{count}</h2>
            <button onClick={()=>setCount(count+1)}>increament</button>
           <button onClick={()=>setCount(count-1)}>decreament</button>
      
    </div>
  )
}

export default App3
