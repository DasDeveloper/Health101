import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../css/account.css'
import { useNavigate } from "react-router-dom";

const Account = () =>{

    const navigate = useNavigate();

    const navigateToRewards = () =>{
        navigate("/rewards")
    }

    const navigateToNotifications = () =>{
        navigate("/notification")
    }
    const navigateToDietSearch = () =>{
        navigate("/dietSearch")
    }

    return (
        <div>

            <div className="accountIconContainer"><AccountCircleIcon className="accountIcon" fontSize="large"></AccountCircleIcon></div>
            <button className="changeAccount" onClick={navigateToRewards}>Exchange points for rewards</button>
            <button className="changeAccount" onClick={navigateToNotifications}>Add Notifications</button>
            <button className="changeAccount" onClick={navigateToDietSearch}>Search for a specific diet</button>
        </div>
    );
}

export default Account;