import "../css/changeMinimumCalories.css"
import { useNavigate
 } from "react-router-dom";
const ChangeMinimumCalories = () =>{

    const navigate = useNavigate();

    const navigateToSetting = () =>{
        navigate("/settings")
    }

    return (
        <div className="calories">
            <p className="title"><h3>Set new minimum calories</h3></p>
            <br/>

            <p><b>New minimum calories:</b></p>
            <br/>
            <input placeholder="New minimum calories"></input>
            <br/>
            <button onClick={navigateToSetting}>Confirm</button>
        </div>
    );
}

export default ChangeMinimumCalories;