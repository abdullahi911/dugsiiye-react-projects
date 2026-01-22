import { useState } from "react";
const Togllebutton = () => {
  const [isbutton,Setisbutton] = useState(true)
const control = () => {
    
Setisbutton(!isbutton)


    
  }

    



  return(
    <>
   {  isbutton ?  <p>the button is OFF </p> : <p>the button is ON </p>  }
    <button onClick={control}> {isbutton ? "Turn ON" : "Turn OFF" }     </button>
    
  </>
  )
}
 export default Togllebutton;