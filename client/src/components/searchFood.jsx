import axios from 'axios'
import { useEffect, useState } from "react";
import "../css/searchFood.css"
import SearchIcon from '@mui/icons-material/Search';

const SearchFood = () =>{
  const [food, setFood] = useState([]);
  const [result, setResult] = useState([]);

  const getFood = async () =>{
    const response = await axios.get(`http://localhost:9000/food/${food}`); 
    console.log(response.data)
    setResult(response.data)
  }

  return (
    <div>
      <div className="top">           
        <input className="searchBar" type="text" id="search" name="search" placeholder="Search..." onChange={e => setFood(e.target.value)}>
        
        </input>
        <button className="searchButton" onClick={getFood}>Find</button>
      </div>

      <div>
        <div>
          {result.length !== 0 ? 
          (<div>
              {result.map(el =>( 
              <div className="resultDetails">
                  <h3>Name: {el.name}</h3>
                  <h3>Calories: {el.calories}</h3>
                  <h3>Serving: {el.serving} units</h3>
                  <button>Add</button>
              </div> 
              ))}
          </div>):
          (<></>)}
        </div> 
      </div>
    </div>
  )
}

export default SearchFood;