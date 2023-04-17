import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import CustomFoodCSS from "../css/customfood.module.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from "axios";
import swal from "sweetalert";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CustomFood = () => {

  const [sent, setSent] = useState(false)
  const [customProduct, setCustomProduct] = useState({
    calorie: "",
    name: "",
    weight: ""
  });

  const addFood = async() => {
    await axios.post(`http://localhost:9000/food/foodName`, {
      name: customProduct.name,
      calories: customProduct.calorie,
      serving: customProduct.weight
    })
    .then((res) => {
      console.log(res);
      swal("Success!", "Successfully added custom food!", "success", {
        button: false,
        timer: 2000,
      });
    })
    .catch((err) => {
      console.log(err);
      swal("Failed!", "Failed to add custom food!", "error", {
        button: false,
        timer: 2000,
      });
    })
    setCustomProduct({
      name: "",
      calorie: "",
      weight: ""
    })
  }

  const increase = () => {
    setCustomProduct({...customProduct, weight: customProduct.weight + 1})
  }

  const decrease = () => {
    if (customProduct.weight > 0) {
      setCustomProduct({...customProduct, weight: customProduct.weight - 1})
    }
  }

  return (
    <div className={CustomFoodCSS.body}>
      <Navbar />
      <div className= {CustomFoodCSS.container}>
        <p className={CustomFoodCSS.title}><b>Please fill the fields below to add a new product</b></p>
        <div className={CustomFoodCSS.product}>

          <div>
            <p><b>Name of the product</b></p>
          <input type="text" value={customProduct.name} className={CustomFoodCSS.input} 
                 onChange={e => setCustomProduct({...customProduct, name: e.target.value})}></input>
          </div>

          <div className={CustomFoodCSS.calorie}>
            <p><b>Calories/100g</b></p>
          <input type="text" className={CustomFoodCSS.input} value={customProduct.calorie} 
                 onChange={(e) => setCustomProduct({ ...customProduct, calorie: e.target.value })
                }></input>
          </div>

          <p className={CustomFoodCSS.size}><b>Weight (g)</b></p>

          <div className={CustomFoodCSS.serving}>         
            <input type="number" value={(customProduct.weight)} className={CustomFoodCSS.weightInput} 
                   onChange={e => setCustomProduct({...customProduct, weight: Number(e.target.value)})}></input>
            <div className={CustomFoodCSS.buttons}>
              <button className={CustomFoodCSS.increase} onClick={increase}><AddIcon></AddIcon></button>
              <button className={CustomFoodCSS.decrease} onClick={decrease}><RemoveIcon></RemoveIcon></button>
            </div>       
          </div>
          <div className={CustomFoodCSS.nav}>
            <button className={CustomFoodCSS.buttonBack} onClick={addFood}><ArrowBackIcon fontSize="large"></ArrowBackIcon></button>
            <button className={CustomFoodCSS.buttonAdd} onClick={addFood}><AddIcon fontSize="large"></AddIcon></button>
          </div>
          <div className={CustomFoodCSS.navTitle}>
            <span><b>Go Back</b></span>
            <span><b>Add Food</b></span>
          </div>          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CustomFood;