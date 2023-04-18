import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import "../css/Setup.css";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  

const Setup3= () => {
    return(
    
    <div className="maincontainer">
           <h2>
            WELCOME
        </h2>
    <div className="containerText">
        <div><h3>Final step almost there!</h3> </div>

        <h5>
        To finish getting you set up we need to know if we can access your fitness data. This is optional but it will make things much easier to calculate on your end  .     
          <Link to="/homePage">
           Privacy Policy
        </Link>
        </h5>

    <div>
    <Checkbox {...label} />  I have read the Policy and accept 
    </div> 
    <Link to="/">
    <button className="buttonNext">
        Finish 
    </button>
    </Link>
  

    <div className="defaultBox">    
    <span class="step"></span>
    <span class="step"></span>
    <span class="stepActive"></span>
    </div>  

    </div>

    </div>

);
}

export default Setup3 ;