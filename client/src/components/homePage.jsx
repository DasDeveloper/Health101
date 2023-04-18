import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import HomePageCSS from "../css/homepage.module.css";
import BarChartIcon from '@mui/icons-material/BarChart';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const HomePage = () => {
  return (
    <div className={HomePageCSS.body}>
      <Navbar /> 
        <div className={HomePageCSS.container}>
          <div className={HomePageCSS.imageContainer}>
            <img className={HomePageCSS.image} src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/13116362801/original/adOkBGpSzksF1vBt2RnHyauy4YM6o87_fQ.jpeg?1636844459" 
            alt="This is an image" />
            {/* <div className={HomePageCSS.textContainer}>
              <p style={{display:"block", textAlign:"center"}}><b>Calories</b></p>
              <p style={{display:"block"}}><b>Consumed:</b> 1002 <b>Burnt:</b> 500  <b>Net:</b> 502</p>
            </div> */}
            
          </div>
          <div className={HomePageCSS.menu}>
            <div className={HomePageCSS.firstRow}>
              <BarChartIcon className={HomePageCSS.icon} fontSize="large"></BarChartIcon>
              {/* <span>&emsp; &emsp; &emsp;</span> */}
              <FitnessCenterIcon className={HomePageCSS.icon} fontSize="large"></FitnessCenterIcon> 
            </div>
            <div className={HomePageCSS.secondRow}>
              <RamenDiningIcon className={HomePageCSS.icon} fontSize="large"></RamenDiningIcon>
              <EmojiEventsIcon className={HomePageCSS.icon} fontSize="large"></EmojiEventsIcon>
            </div>
          </div>
          
        </div>
      <Footer/>
    </div>
  )
}

export default HomePage;