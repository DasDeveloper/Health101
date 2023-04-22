
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom'
import "../css/Setup.css";


  

const SetupSettings= () => {
    return(
    <div className="maincontainer">
    <div className="containerText">
        <h4>
        Here you can change your initial responses. Don't forget to save before leaving
        </h4>
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
          variant="filled"
        />
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
    <div>

        Access to your outside app data
   
    <Switch label="Access to your outside app data" defaultChecked />
    </div>    
    
     <Link to="/settings"> 
    <button className="buttonNext">
    Save
    </button>
    </Link>


    </div>

    </div>

);
}

export default SetupSettings;