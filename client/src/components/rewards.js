import Navbar from "./navbar";
import Footer from "./footer";
import RewardsCSS from "../css/rewards.module.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const RewardsPage = () => {
  return (
    <div className={RewardsCSS.body}>
      <Navbar />
      <div className={RewardsCSS.container}>
        <div className={RewardsCSS.text}>
          <p>
            <b>Your points: 500</b>
          </p>
        </div>
        <div className={RewardsCSS.dropdown}>
          <FormControl className={RewardsCSS.choice}>
            <InputLabel>Cards</InputLabel>
            <Select sx={{ fontWeight: "bold", height: "75px" }} label="Cards">
              <MenuItem value="Mastercard">Amazon</MenuItem>
              <MenuItem value="Visa">Visa</MenuItem>
              <MenuItem value="Interact">Mastercard</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={RewardsCSS.choice}>
            <InputLabel>Amount</InputLabel>
            <Select sx={{ fontWeight: "bold", height: "75px" }} label="Amount">
              <MenuItem value={20}>20$ (5000 points)</MenuItem>
              <MenuItem value={50}>50$ (15 000 points)</MenuItem>
              <MenuItem value={100}>100$ (25 000 points)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RewardsPage;
