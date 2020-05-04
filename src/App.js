import React, {useEffect, useState} from 'react';
import Reciepe from './Reciepe';
import './App.css';

const App=()=> {
  const APP_ID = "834eb155"
  const APP_KEY = "b60b8a3ac95e2e30c7a32b21eebeaaf1"

  

  const [reciepes, setReciepe]= useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('banana')

  const getReciepe=async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data.hits)
    setReciepe(data.hits)
  }

  const getSearch=e=> {
    setSearch(e.target.value)
    console.log(search)
  }

  const updateSearch=e=> {
    e.preventDefault();
    setQuery(search)
  }

  useEffect(() => {
    getReciepe()
  }, [query])
  

  return(
    <div className='searchApp'>
      <form onSubmit={updateSearch} className='searchForm'>
        <input  type='text' className="searchText" value={search} onChange={getSearch}/>
        <button type='submit' className='submitButton'>Submit</button>
      </form>
      <div className='reciepe'>
      {reciepes.map(reciepe=> (
        <Reciepe 
          title = {reciepe.recipe.label}
          calories = {reciepe.recipe.calories}
          image = {reciepe.recipe.image}
          ingredients = {reciepe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

export default App