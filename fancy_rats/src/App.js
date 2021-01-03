import './App.css';
import { useEffect, useState } from 'react';
import RatList from './components/RatList'
import RatSort from './components/RatSort'
import Header from './components/Header'
import NewRat from './components/NewRat'

function App() {

  const [rats, setRats] = useState([])
  const [sort, setSort] = useState("")
  const sortCategories= ['name', 'age', 'eyes', 'markings', 'body', 'coat']

  useEffect(() => {
    fetch('http://localhost:3000/api/rats')
      .then(res => res.json())
      .then( data => setRats(data))
  },[])

  async function postData(url = '', data = {}) {
  
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }


  const handleSortSelection = (newSort) => {
    setSort(newSort)
  }

  const generateRatIcon = (rat) => {
    const alphabet = ['a',' b', 'c', 'd', 'e', 'f', 'h', 'i' , 'j',' k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const ratNameArray = rat.name.toLowerCase().split("")
    
    const ratNumbers = ratNameArray.map(letter => {
      return alphabet.indexOf(letter)
    })
    const getSum = (total, number) => {
      return total + number
    }
    const ratTotal = ratNumbers.reduce(getSum)
    const iconNumber = ratTotal % 74
    
    return "/images/icons/" + iconNumber + ".png"
  }


  rats.sort((rat1, rat2) => {
    if (sort){
  
      if(sort === 'age'){
        const rat1YearsToMonths = rat1.age.years * 12
        const rat2YearsToMonths = rat2.age.years * 12
        const rat1Age = rat1YearsToMonths + rat1.age.months
        const rat2Age = rat2YearsToMonths + rat2.age.months
        if(rat1Age < rat2Age){
          return -1
        } else {
          return 1
        }
      } else {
        if(rat1[sort].toLowerCase() < rat2[sort].toLowerCase()){
          return -1
        } else {
          return 1
        }
      }
    }   
    return 0
  })

 const addNewRat = (submittedRat) => {
   postData('http://localhost:3000/api/rats', submittedRat)
   .then( responseRat => setRats([...rats, responseRat]))
 }
  
  return (
    <>
      <Header></Header>
      <RatSort   handleSortSelection={handleSortSelection} sortOptions={sortCategories}></RatSort>
      <NewRat submitNewRat={ (newRat) => addNewRat(newRat)}></NewRat>
      <RatList rats={rats} generateRatIcon={generateRatIcon}></RatList>
    </>
  );
}

export default App;
