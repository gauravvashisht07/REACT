// import { useState, useEffect } from 'react'
// import getPosts from './api';
// import './App.css'
// import Card from './componets/Card';

// function App() {
//     const [data, setData] = useState(null);
//      useEffect(()=>{
//       getPosts().then((posts)=>{
//         setData(posts);
//       })
//      },[]);

//   return (
//     <>
//      <div className="">{
//       data ? data.map((e)=>
//       <Card  title={e.title} id={e.id}/>
//       ):<p>no data</p>
//     }
//      </div>
    
//     </>
//   )
// }

// export default App



import { useState, useEffect } from 'react';
import getPosts from './api';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setData(posts);
    });
  }, []);

  return (
    <div className="App">
      {data ? (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default App;
