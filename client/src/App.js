
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserSession from "./UserSession";
import Navbar from "./components/navbar";
import SearchFood from "./components/searchFood";
import Footer from "./components/footer";
import HomePage from "./components/homePage";
import Settings from "./components/settings";
import ChangePassword from "./components/changePassword";
import ChangeUsername from "./components/changeUsername";
import StatisticsPage from "./components/statisticsPage";
import ChangeMinimumCalories from "./components/changeMinimumCalories";
import CustomFood from "./components/customFood";
import Setup from "./components/Setup"
import Setup2 from "./components/Setup2"
import Setup3 from "./components/Setup3"



function App() {

  return (
    <UserSession>
      {/* Link to pages using React Router DOM */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/searchfood"
            element={
              <>
                <Navbar /> <SearchFood/> <Footer/>
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <HomePage/> 
              </>
            }
          ></Route>
          
          <Route
            path="/settings"
            element={
              <>
                <Navbar /> <Settings/> <Footer/>
              </>
            }
          ></Route>
          
          <Route
            path="/changepassword"
            element={
              <>
                <Navbar /> <ChangePassword/> <Footer/>
              </>
            }
          ></Route>
          
          <Route
            path="/changeusername"
            element={
              <>
                <Navbar /> <ChangeUsername/> <Footer/>
              </>
            }
          ></Route>

          <Route
            path="/statistics"
            element={
              <>
                <StatisticsPage/>
              </>
            }
          ></Route>
          
          <Route
            path="/customFood"
            element={
              <>
                <CustomFood/>
              </>
            }
          ></Route>

           <Route
            path="/changeminimumcalories"
            element={
              <>
                <Navbar/><ChangeMinimumCalories/><Footer/>
              </>
            }
          ></Route>
          <Route
            path="/Setup"
            element={
              <>
                <Navbar /> <Setup/>
              </>
            }
          ></Route>
            <Route
            path="/Setup2"
            element={
              <>
                <Navbar /> <Setup2/>
              </>
            }
          ></Route>
           <Route
            path="/Setup3"
            element={
              <>
                <Navbar /> <Setup3/>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </UserSession>
  );
}

export default App;
