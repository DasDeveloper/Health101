import { useNavigate } from "react-router-dom"
import "../css/changePassword.css"

const ChangePassword = () =>{

    const navigate = useNavigate();

    const navigateToSetting = () =>{
        navigate("/settings")
    }
    
    return(
        <div className="password">

            <p className="title"><h3>Change your password</h3></p>
            <br/>

            <p><b>New password:</b></p>
            <br/>
            <input placeholder="New password"></input>
            <br/>
            <p><b>Confirm new password:</b></p>
            <br/>
            <input placeholder="Confirm new password"></input>
            <br/>
            <button onClick={navigateToSetting}>Confirm</button>
            
        </div>
    )
}

export default ChangePassword;