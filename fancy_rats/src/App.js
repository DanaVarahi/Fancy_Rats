import './App.css';
import { useEffect, useState } from 'react';
import RatList from './components/RatList'
import RatSort from './components/RatSort'
import Header from './components/Header'

function App() {

  const [rats, setRats] = useState([])
  const [sort, setSort] = useState("")
  const sortCategories= ['name', 'age', 'eyes', 'markings', 'body', 'coat']

  useEffect(() => {
    fetch('http://localhost:3000/api/rats')
      .then(res => res.json())
      .then( data => setRats(data))
  },[])

  const handleSortSelection = (newSort) => {
    setSort(newSort)
  }

    rats.sort((rat1, rat2) => {
      if (sort){
        if(rat1[sort].toLowerCase() < rat2[sort].toLowerCase()){
          return -1
        } else {
          return 1
        }
      }   
  })

  return (
    <>
      <Header></Header>
      <RatSort   handleSortSelection={handleSortSelection} sortOptions={sortCategories}></RatSort>
      <RatList rats={rats}></RatList>
    </>
  );
}

export default App;
