import axios from 'axios'
import { useEffect, useState } from "react";


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
            
            <label for="search">Search a food</label>
            <input type="text" id="search" name="search" onChange={e => setFood(e.target.value)}></input>
            <button onClick={getFood}>Find</button>

            <div>
                Result:

                {result.map(el =>(
                    <div key={el._id}> {el.name + el.calories + el.serving}</div>
                ))}



            </div>

        </div>
    )
}

export default SearchFood;