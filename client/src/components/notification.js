import Navbar from "./navbar";
import Footer from "./footer";
import NotificationCSS from "../css/notification.module.css";
import { TextField } from "@mui/material";
import { grey } from "@mui/material/colors";

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
      <Footer />
    </div>
  );
};

export default NotificationPage;
