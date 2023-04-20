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


  
  const redirectHomePage = () => {
    navigate("/");
  };

  const redirectSettings = () => {
    navigate("/settings");
  };

  const redirectAccount = () => {
    navigate("/account");
  };





  return (
    <div className={FooterCSS.footer}>
      <AccountCircleIcon className={FooterCSS.icon} fontSize="large" onClick={redirectAccount}></AccountCircleIcon>
      <HomeIcon className={FooterCSS.icon} fontSize="large" onClick={redirectHomePage}></HomeIcon>
      <SettingsIcon className={FooterCSS.icon} fontSize="large" onClick={redirectSettings}></SettingsIcon>
    </div>
  );
}

export default Footer;