import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../css/settings.css'

const Settings = () =>{
    return (
        <div>

            <div className="accountIcon"><AccountCircleIcon></AccountCircleIcon></div>
            <button className="change">Change your username</button>
            <button className="change">Change your password</button>
            <button className="change">Change your minimum calories intake</button>
        </div>
    );
}


export default Settings;