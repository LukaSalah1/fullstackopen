import StatisticLine from "./StatisticLine"

const Statistics = (props) => {
  
    const {good,neutral,bad}=props
    const all = good+neutral+bad
    const average = ((good+bad)/all).toFixed(1)
    const positive = ((good*100)/all).toFixed(1)
    
    if(all===0)
    return <p>No feedback given</p>
    return(
      <StatisticLine good={good} 
                     neutral={neutral} 
                     bad={bad}
                     all={all}
                     average={average}
                     positive={positive} />)

  }

  export default Statistics