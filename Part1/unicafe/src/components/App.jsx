import { useState } from 'react'
import ButtonHandles from './ButtonHandles'
import Statistics from './Statistics'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler=()=>{

   setGood(good+1)

  }

  const neutralHandler=()=>{

    setNeutral(neutral+1)
 
   }

  const badHandler=()=>{

    setBad(bad+1)
 
   }

  return (
    <div>
    <h1>give feedback</h1>
    <ButtonHandles onClick={goodHandler} text="good"/>
    <ButtonHandles onClick={neutralHandler} text="neutral"/>
    <ButtonHandles onClick={badHandler} text="bad"/>
    <h1>statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
