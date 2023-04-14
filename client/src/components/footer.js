import "../css/footer.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const Footer = () =>{

    return (
        <div className="footer">

            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
            <HomeIcon fontSize="large"></HomeIcon>
            <SettingsIcon fontSize="large"></SettingsIcon>


        </div>
    );

}

export default Footer;