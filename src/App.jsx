import { useEffect, useState } from 'react'

import './App.css'
import Watch from './Component/Watch/watch'

function App() {

  const [watches, setWatches] = useState([])

  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])



  
  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 8",
  //     price: 399,
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 5",
  //     price: 279,
  //   },
  //   {
  //     id: 3,
  //     name: "Garmin Forerunner 255",
  //     price: 349,
  //   },
  //   {
  //     id: 4,
  //     name: "Fossil Gen 6 Hybrid",
  //     price: 229,
  //   },
  //   {
  //     id: 5,
  //     name: "Fitbit Versa 4",
  //     price: 199,
  //   },
  // ];
  

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map((watch, id) => <Watch key={id} watch = {watch}></Watch>)
      }
    </>
  )
}

export default App
