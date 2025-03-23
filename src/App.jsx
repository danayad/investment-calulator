import { useState } from "react";
import Header  from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
  const [userInput,setUserInpt]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
});

const inputIsValid= userInput.duration>0 ;

function handleChange(inputIdentifier,newValue){
  setUserInpt(previousUserInput=>{return{
      ...previousUserInput,
      [inputIdentifier]: +newValue
  }})
}

 
  return (
    <>
        <Header/>
        <UserInput userInput={userInput} onChange={handleChange}/>
        {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
        {inputIsValid &&<Results input={userInput}/>}
    </>

  )
}

export default App
