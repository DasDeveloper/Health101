import axios from 'axios'
import { useEffect } from "react";


const SearchFood = () =>{

    useEffect( () =>{
        getAllFoods();
    }, [])
    
    const getAllFoods = async () =>{
    
        const foods = await axios.get("http://localhost:9000/")
    }

    return (
        <div>
            
            <label for="search">Search a food</label>
            <input type="text" id="search" name="search"></input>

            <div>
                All foods:


            </div>

        </div>
    )
}

export default SearchFood;