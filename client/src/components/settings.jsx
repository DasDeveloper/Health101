import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../css/settings.css'

const Settings = () =>{
    return (
        <div>

            <div className="iconContainer"><AccountCircleIcon className="accountIcon" fontSize="large"></AccountCircleIcon></div>
            <button className="change">Change your username</button>
            <button className="change">Change your password</button>
            <button className="change">Change your minimum calories intake</button>
        </div>
    );
}


export default Settings;