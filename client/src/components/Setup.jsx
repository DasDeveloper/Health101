import Navbar from "./navbar";
import Footer from "./footer";
import "../css/Setup.css";

const Setup= () => {
    return(
    <div className="maincontainer">
           <h2>
            WELCOME
        </h2>
    <div className="containerText">
        <h3>
        To start things we will need 
        </h3>
        <h5  >
        Your Age:
        </h5>
    <div className="inputSetup">
    </div>
    <h5  >
    Sex (assigned at birth):
        </h5>
    <div className="inputSetup">
    </div>
    <button className="buttonNext">
        Next  
    </button>

    <div className="defaultBox">    
    <span class="stepActive"></span>
    <span class="step"></span>
    <span class="step"></span>
    </div>  

    </div>

    </div>

);
}

export default Setup;