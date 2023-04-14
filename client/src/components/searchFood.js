import axios from 'axios'
import { useState } from "react";
import "../css/searchFood.css"

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
            <div>
                
                <label for="search">Search a food</label>
                <input className="searchBar" type="text" id="search" name="search" placeholder="Search..." onChange={e => setFood(e.target.value)}></input>
                <button onClick={getFood}>Find</button>
            </div>

            <div>
                Results:

                <div className="resultDetails">

                    {result.length!=0 ? (<div>
                        {result.map(el =>(
                            
                        <div>
                            <h3>Name: {el.name}</h3>
                            <h3>Calories: {el.calories}</h3>
                            <h3>Serving: {el.serving} units</h3>
                            <button>Add to daily calories</button>
                        </div>
                        
                    ))}
                    </div>):
                    (<div>No results found</div>)}

                </div>

                



            </div>

        </div>
    )
}

export default SearchFood;