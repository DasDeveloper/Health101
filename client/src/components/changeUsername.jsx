import "../css/changeUsername.css"
import { useNavigate } from "react-router-dom";

const ChangeUsername = () =>{

    const navigate = useNavigate();

    const navigateToSetting = () =>{
        navigate("/settings")
    }
    
    return(
        
        <div className="username">
            
            <p className="title"><h3>Change your username</h3></p>
            <br/>

            <p><b>New username:</b></p>
            <br/>
            <input placeholder="New username"></input>
            <br/>
            <button onClick={navigateToSetting}>Confirm</button>
            
        </div>
    )
}

export default ChangeUsername;