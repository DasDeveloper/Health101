import Navbar from "./navbar";
import Footer from "./footer";
import AddActivitiesCSS from "../css/AddActivities.module.css"
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add'
import TimerIcon from '@mui/icons-material/Timer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const AddActivities = () => {
    return (
        <div className={AddActivitiesCSS.body}>
            <Navbar />
                <div className={AddActivitiesCSS["main-content"]}>
                    <div className={AddActivitiesCSS.input}>
                        <SearchIcon/>
                        <input id={AddActivitiesCSS.inputbox} placeholder="Search Activity"></input>
                    </div>
                    <div className={AddActivitiesCSS["top-card"]}>
                        <h2>Jogging</h2>
                        <button className={AddActivitiesCSS["button"]}>
                            <AddIcon fontSize="large"/>
                        </button>
                    </div>
                    <div className={AddActivitiesCSS["top-card"]}>
                        <h2>Biking</h2>
                        <button className={AddActivitiesCSS["button"]}>
                            <AddIcon fontSize="large"/>
                        </button>
                    </div>
                    <div className={AddActivitiesCSS["timediv"]}>
                        <h2>Time of Exercise</h2>
                        <div className={AddActivitiesCSS.input}>
                            <TimerIcon fontSize="large" />
                            <input id={AddActivitiesCSS.inputbox} placeholder="Enter Time Here"></input>
                        </div>
                    </div>
                    <div className={AddActivitiesCSS.bottom}>
                        <Link to="/activities">
                            <div className={AddActivitiesCSS.left}>
                                <button className={AddActivitiesCSS["button"]} id={AddActivitiesCSS["back"]}>
                                    <ArrowBackIcon fontSize="large" />
                                </button>
                                <label>
                                    <b>Go Back</b>
                                </label>
                            </div>
                        </Link>
                        <div className={AddActivitiesCSS.right}>
                            <button className={AddActivitiesCSS["button"]}>
                                <AddIcon fontSize="large" />
                            </button>
                            <label>
                                <b>Add Activity</b>
                            </label>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default AddActivities;