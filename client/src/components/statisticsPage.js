import Navbar from "./navbar";
import Footer from "./footer";
import StatisticsPageCSS from "../css/statisticspage.module.css";

const StatisticsPage = () => {
  return (
    <div className={StatisticsPageCSS.body}>
      <Navbar />
      <div className={StatisticsPageCSS.container}>

        <h1 style={{textAlign:"center", marginBottom: 0}}>Annual Report</h1>
        <div className={StatisticsPageCSS.imageContainer}>
          <img className={StatisticsPageCSS.image} src="https://cdn1.byjus.com/wp-content/uploads/2021/03/bar-graph.png"
          alt="This is a stat image"/>
        </div>
        
        <div className={StatisticsPageCSS.text}>
          <p><b>Consecutive Days: 50 days</b></p>
          <p><b>Total Points Earned: 500 points</b></p>
          <p><b>Area of improvement: Better dieting</b></p>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default StatisticsPage;