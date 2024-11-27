import { useEffect, useState } from 'react'
import './App.css'
import LoadingPlaceholder from './LoadingPlaceholder'
import Graph from './Graph'

const urls = ['https://rcslabs.ru/ttrp1.json',
              'https://rcslabs.ru/ttrp2.json',
              'https://rcslabs.ru/ttrp3.json',
              'https://rcslabs.ru/ttrp4.json']

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(urls[0])
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [])

  const changeUrl = (url) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }

  return (
    <div className='container'>
      {!data && <LoadingPlaceholder/>}
      {data && <Graph data={data} changeUrl={changeUrl} urls={urls}/>}
    </div>
  )
}

export default App
