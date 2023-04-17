import Navbar from "./navbar";
import Footer from "./footer";
import DietSearchCSS from "../css/dietSearch.module.css";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const DietSearchPage = () => {
  const glutenfree = [<img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/paneer-korma-07a67d4.jpg?quality=90&resize=768,574" width={150} height={150} onDragStart={e => e.preventDefault()} role="presentation" />, <img src="https://sweetpotatosoul.com/wp-content/uploads/2021/01/Massaged-Kale-Salad-2-Fast-Vegan-Meal-Prep.jpeg" width={150} height={150} onDragStart={e => e.preventDefault()} role="presentation" />, <img src="https://images.immediate.co.uk/production/volatile/sites/2/2019/12/Vegan-Thai-red-curry-a716ab7-scaled.jpg?quality=90&crop=17px,45px,2525px,1086px&resize=556,505" width={150} height={150} onDragStart={e => e.preventDefault()} role="presentation" />];

  const lowcarb = [<img src="https://assets.rebelmouse.io/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoxNjgyMzIzNTY5LCJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMjg1MDc4My9vcmlnaW4uanBnIn0.TBisjNoPThfIv9S5EOo7rFF1Xa4v7__fnPjluWD_xlQ/img.jpg" width={150} height={150} onDragStart={e => e.preventDefault()} role="presentation" />, <img src="https://www.maebells.com/wp-content/uploads/2020/02/skewers-4.jpg" width={150} height={150} onDragStart={e => e.preventDefault()} role="presentation" />, <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/04/low-carb-diet-meal-plan-and-menu-1296x728-feature.jpg?h=1528" width={150} height={150} onDragStart={e => e.preventDefault()} role="presentation" />];

  const buildmuscle = [<img src="https://images.immediate.co.uk/production/volatile/sites/2/2022/08/Healthy-thai-Salmon-TrayBake-deb98b5.jpg?quality=90&resize=556,505" width={150} height={150} onDragStart={e => e.preventDefault()} role="presentation" />, <img src="https://i0.wp.com/emyogifit.com/wp-content/uploads/2022/05/IMG_1739.jpg?fit=750%2C810&ssl=1" width={150} height={150} onDragStart={e => e.preventDefault()} role="presentation" />, <img src="https://hips.hearstapps.com/hmg-prod/images/thai-tempeh-buddha-bowl-6-1-683x1024-1594747155.jpg?resize=480:*" width={150} height={150} onDragStart={e => e.preventDefault()} role="presentation" />];

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
        <div className={DietSearchCSS.slideshowSection}>
          <b> Gluten free: </b>
          <AliceCarousel mouseTracking items={glutenfree} />
          <b> Low carbs: </b>
          <AliceCarousel mouseTracking items={lowcarb} />
          <b> Build muscles: </b>
          <AliceCarousel mouseTracking items={buildmuscle} />
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Footer />
    </div>
  );
};

export default DietSearchPage;
