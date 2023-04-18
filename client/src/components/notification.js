import Navbar from "./navbar";
import Footer from "./footer";
import NotificationCSS from "../css/notification.module.css";
import { TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const NotificationPage = () => {
  return (
    <div className={NotificationCSS.body}>
      <Navbar />
      <div className={NotificationCSS.container}>
        <div className={NotificationCSS.text}>
          <p>
            <b>Notification name:</b>
            <TextField id="texfield" variant="outlined" />
          </p>
          <p>
            <b>Date and time:</b>
            <TextField id="texfield" variant="outlined" />
          </p>
        </div>
      </div>
      <div className={NotificationCSS.bottom}>
        <Link to="/activities">
          <div className={NotificationCSS.left}>
            <button className={NotificationCSS["button"]} id={NotificationCSS["back"]}>
              <ArrowBackIcon fontSize="large" />
            </button>
            <label>
              <b>Go Back</b>
            </label>
          </div>
        </Link>
        <div className={NotificationCSS.right}>
          <button className={NotificationCSS["button"]}>
            <AddIcon fontSize="large" />
          </button>
          <label>
            <b>Save Notification</b>
          </label>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotificationPage;
