import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../css/settings.css'
import { useNavigate } from "react-router-dom";





const Settings = () =>{

    const navigate = useNavigate();

    const navigateToChangeUsername = () =>{

        navigate("/changeusername")
    }

    const navigateToChangePassword = () =>{

        navigate("/changepassword")
    }
    const navigateToChangeCalories = () =>{

        navigate("/changeminimumcalories")
    }

    return (
        <div>

            <div className="iconContainer"><AccountCircleIcon className="accountIcon" fontSize="large"></AccountCircleIcon></div>
            <button className="change" onClick={navigateToChangeUsername}>Change your username</button>
            <button className="change" onClick={navigateToChangePassword}>Change your password</button>
            <button className="change" onClick={navigateToChangeCalories}>Change your minimum calories intake</button>
        </div>
    );
}


export default Settings;