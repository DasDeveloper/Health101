import Navbar from "./navbar";
import Footer from "./footer";
import ActivitiesCSS from "../css/ActivitiesOverview.module.css"
import { SvgIcon } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const ActivitiesOverview = () => {
    return (
        <div className={ActivitiesCSS.body}>
            <Navbar />
                <div className={ActivitiesCSS["main-content"]}>
                    <div className={ActivitiesCSS["top-card"]}>
                        <h1>According to your app data, you have</h1>
                        <div className={ActivitiesCSS.infoSummary}>
                            <p>Walked: 5km</p>
                            <p>Swam: 2km</p>
                            <p>Burned: 1500 Calories</p>
                        </div>
                    </div>
                    <div className={ActivitiesCSS.bottom}>
                        <div className={ActivitiesCSS.left}>
                            <p>If there's a new activity you would like to add ↓</p>
                            <button className={ActivitiesCSS["button"]}>
                                <AddIcon />
                            </button>
                            <label>
                                <b>Add Custom</b>
                            </label>
                        </div>
                        <div className={ActivitiesCSS.right}>
                            <p>If there are any other activities you have done ↓</p>
                            <button className={ActivitiesCSS["button"]}>
                                <AddIcon />
                            </button>
                            <label>
                                <b>Add New Activity</b>
                            </label>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default ActivitiesOverview;