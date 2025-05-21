import getPosts from './api'
import { useEffect, useState } from 'react'
import './App.css'
import PostCard from './components/Postcard';

function App() {

  const [data, setData] = useState(null);
  useEffect(() => {
    getPosts().then((posts) => {
      setData(posts);
    })
  }, [])


  return (

    <>
      <div className="">
        {
          data ? data.map((e)=><PostCard title={e.title} id={e.id}/> ):<p>no data</p>
        }
      </div>

    </>


  )
}

export default App
