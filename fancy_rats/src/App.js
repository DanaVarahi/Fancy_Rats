import './App.css';
import { useEffect, useState } from 'react';
import RatList from './components/RatList'
import RatSort from './components/RatSort'

function App() {

  const [rats, setRats] = useState([])
  const [sort, setSort] = useState("")
  const sortCategories= ['name', 'eyes', 'markings', 'body', 'coat']

  useEffect(() => {
    fetch('http://localhost:3000/api/rats')
      .then(res => res.json())
      .then( data => setRats(data))
  },[])

  const handleSortSelection = (newSort) => {
    console.log(rats)
    setSort(newSort)
  }

    rats.sort((rat1, rat2) => {
    
      if(rat1[sort] < rat2[sort]){
        return -1
      } else {
        return 1
      }
    return 0
  })

  return (
    <div className="App">
      <RatSort   handleSortSelection={handleSortSelection} sortOptions={sortCategories}></RatSort>
      <RatList rats={rats}></RatList>
    </div>
  );
}

export default App;
