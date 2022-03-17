import {useState} from 'react'

const useCounter = (value = 10) => {
    
    const [counter, setCounter] = useState(value)
    
    const handleAdd = () =>{        
        setCounter(counter + 1)               
    }
     const handleSubstract = () =>{
        if(counter > 0){
            setCounter(counter - 1)
        }         
     }
     const handleReset = () =>{
        setCounter(value)
     }
  return {
   counter, 
   handleAdd,
   handleReset,
   handleSubstract
} 
}

export default useCounter