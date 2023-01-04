import './App.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'
// we have to use .then() because the fetch function returns a promise. it needs to be converted to js object bcause we get it as a JSON.
// Axios.get will be showing everytime the component updates
function App() {
  // fetch('https://catfact.ninja/fact')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //   })
  const [catFact, setCatFact] = useState('')
  // function that will be fetchig fetchCatFact that is to link with the button onClick to get the fetchdata.
  const fetchCatFact = () => {
    Axios.get('https://catfact.ninja/fact').then((res) => {
      setCatFact(res.data.fact)
      console.log(res.data)
    })
  }
  useEffect(() => {
    // Axios.get('https://catfact.ninja/fact').then((res) => {
    //   setCatFact(res.data.fact)
    //   console.log(res.data)
    fetchCatFact() // function call; this will work the same way. since we put the same inside the function possible to substitue with calling function.
    // })
  }, [])

  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact </button>
      <p>{catFact} </p>
    </div>
  )
}

export default App
