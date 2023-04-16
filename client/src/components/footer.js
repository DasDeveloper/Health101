import FooterCSS from "../css/footer.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const Footer = () =>{
  return (
    <div className={FooterCSS.footer}>
      <AccountCircleIcon className={FooterCSS.icon} fontSize="large"></AccountCircleIcon>
      <HomeIcon className={FooterCSS.icon} fontSize="large"></HomeIcon>
      <SettingsIcon className={FooterCSS.icon} fontSize="large"></SettingsIcon>
    </div>
  );
}

export default Footer;