import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadingPlaceholder from './LoadingPlaceholder'
import Graph from './Graph'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://rcslabs.ru/ttrp1.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [])

  return (
    <div className='container'>
      {!data && <LoadingPlaceholder/>}
      {data && <Graph data={data}/>}
    </div>
  )
}

export default App
