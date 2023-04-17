import Navbar from "./navbar";
import Footer from "./footer";
import DietSearchCSS from "../css/dietSearch.module.css";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";

const DietSearchPage = () => {
  const images = ["https://images.immediate.co.uk/production/volatile/sites/30/2020/08/paneer-korma-07a67d4.jpg?quality=90&resize=768,574", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/paneer-korma-07a67d4.jpg?quality=90&resize=768,574", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/paneer-korma-07a67d4.jpg?quality=90&resize=768,574"];

  return (
    <div className={DietSearchCSS.body}>
      <Navbar />
      <div className={DietSearchCSS.container}>
        <div className={DietSearchCSS.text}>
          <p>
            <TextField
              id="texfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <FaSearch />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              placeholder="Search"
              variant="outlined"
            />
          </p>
        </div>
        <div className="slideshow-section1">
          <p>
            <b> Gluten free: </b>
          </p>
          <br />
          <Carousel>
            <div>
              <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/paneer-korma-07a67d4.jpg?quality=90&resize=768,574" width={150} height={150} />
            </div>
            <div>
              <img src="https://sweetpotatosoul.com/wp-content/uploads/2021/01/Massaged-Kale-Salad-2-Fast-Vegan-Meal-Prep.jpeg" width={150} height={150} />
            </div>
            <div>
              <img src="https://images.immediate.co.uk/production/volatile/sites/2/2019/12/Vegan-Thai-red-curry-a716ab7-scaled.jpg?quality=90&crop=17px,45px,2525px,1086px&resize=556,505" width={150} height={150} />
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DietSearchPage;
