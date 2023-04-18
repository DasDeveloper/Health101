
import TextField from '@mui/material/TextField';

import { Link } from 'react-router-dom'
import "../css/Setup.css";


  

const Setup2= () => {
    return(
    <div className="maincontainer">
           <h2>
            WELCOME
        </h2>
    <div className="containerText">
        <h3>
        We will also  need :
        </h3>
        <h5  >
        Your Height:
        </h5>
        <TextField
          required
          label="Required"
          //helperText="18"
          variant="filled"
        />
    <h5  >
       Your Weight:
        </h5>
        <TextField
          required
          label="Required"
          //helperText="Male"
          variant="filled"
        />
     <Link to="/Setup3"> 
    <button className="buttonNext">
    Next
    </button>
    </Link>

    <div className="defaultBox">    
    <span class="step"></span>
    <span class="stepActive"></span>
    <span class="step"></span>
    </div>  

    </div>

    </div>

);
}

export default Setup2 ;