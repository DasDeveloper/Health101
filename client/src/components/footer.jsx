import FooterCSS from "../css/footer.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";

const Footer = () =>{

  const navigate = useNavigate();

  const navigateToAccountPage = () =>{
    navigate("/account")
  }

  const navigateToSettings = () =>{
    navigate("/settings")
  }
  const navigateToHomePage = () =>{
    navigate("/")
  }
  //<button className="change" onClick={navigateToAccountPage}></button>
  //<button className="change" onClick={navigateToSettings}></button>
  //<button className="change" onClick={navigateToHomePage}></button>

  return (
    <div className={FooterCSS.footer}>
      <AccountCircleIcon className={FooterCSS.icon} fontSize="large"></AccountCircleIcon>
      <HomeIcon className={FooterCSS.icon} fontSize="large"></HomeIcon>
      <SettingsIcon className={FooterCSS.icon} fontSize="large"></SettingsIcon>
    </div>
  );
}

export default Footer;