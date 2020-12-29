import './App.css';
import { useEffect, useState } from 'react';
import RatList from './components/RatList'

function App() {

  const [rats, setRats] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/rats')
      .then(res => res.json())
      .then( data => setRats(data))
  },[])

  return (
    <div className="App">
      <RatList rats={rats}></RatList>
    </div>
  );
}

export default App;
