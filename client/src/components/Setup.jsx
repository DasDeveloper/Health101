
import TextField from '@mui/material/TextField';

import { Link } from 'react-router-dom'
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
        <TextField
          required
          label="Required"
          //helperText="18"
          variant="filled"
        />
    <h5  >
    Sex (assigned at birth):
        </h5>
        <TextField
          required
          label="Required"
          //helperText="Male"
          variant="filled"
        />
     <Link to="/Setup2"> 
    <button className="buttonNext">
    Next
    </button>
    </Link>
    <div className="defaultBox">    
    <span class="stepActive"></span>
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
    </div>  

    </div>

    </div>

);
}

export default Setup;