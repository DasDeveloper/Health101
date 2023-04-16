import Navbar from "./navbar";
import Footer from "./footer";
import AddCustomActivityCSS from "../css/AddCustomActivity.module.css"
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const AddCustomActivity = () => {
    return (
        <div className={AddCustomActivityCSS.body}>
            <Navbar />
                <div className={AddCustomActivityCSS["main-content"]}>
                    <div className={AddCustomActivityCSS["top-card"]}>
                        <h2>You can add a new custom activity here.<br />
                        To add the completed exercise, tap Save.</h2>
                    </div>
                    <div className={AddCustomActivityCSS["timediv"]}>
                        <h2>Name of Activity</h2>
                        <div className={AddCustomActivityCSS.input}>
                            <DirectionsRunIcon fontSize="large" />
                            <input id={AddCustomActivityCSS.inputbox} placeholder="Enter Activity Here"></input>
                        </div>
                    </div>
                    <div className={AddCustomActivityCSS["timediv"]}>
                        <h2>Calories Burnt / Hour</h2>
                        <div className={AddCustomActivityCSS.input}>
                            <WhatshotIcon fontSize="large" />
                            <input id={AddCustomActivityCSS.inputbox} placeholder="Enter Calories Here"></input>
                        </div>
                    </div>
                    <div className={AddCustomActivityCSS.bottom}>
                        <Link to="/activities">
                            <div className={AddCustomActivityCSS.left}>
                                <button className={AddCustomActivityCSS["button"]} id={AddCustomActivityCSS["back"]}>
                                    <ArrowBackIcon fontSize="large" />
                                </button>
                                <label>
                                    <b>Go Back</b>
                                </label>
                            </div>
                        </Link>
                        <div className={AddCustomActivityCSS.right}>
                            <button className={AddCustomActivityCSS["button"]}>
                                <SaveAltIcon fontSize="large" />
                            </button>
                            <label>
                                <b>Save</b>
                            </label>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default AddCustomActivity;