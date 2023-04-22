import SettingsIcon from '@mui/icons-material/Settings';
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
    const navigateToSetupSettings = () =>{

        navigate("/SetupSettings")
    }

    return (
        <div>

            <div className="iconContainer"><SettingsIcon className="accountIcon" fontSize="large"></SettingsIcon></div>
            <button className="change" onClick={navigateToChangeUsername}>Change your username</button>
            <button className="change" onClick={navigateToChangePassword}>Change your password</button>
            <button className="change" onClick={navigateToChangeCalories}>Change your minimum calories intake</button>
            <button className="change" onClick={navigateToSetupSettings}>Change your setup settings</button>
        </div>
    );
}


export default Settings;