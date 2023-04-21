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
import RewardsPage from "./components/rewards";
import NotificationPage from "./components/notification";
import ActivitiesOverview from "./components/ActivitiesOverview";
import AddActivities from "./components/AddActivities";
import AddCustomActivity from "./components/AddCustomActivity";
import DietSearchPage from "./components/dietSearch";
import ChangeMinimumCalories from "./components/changeMinimumCalories";
import CustomFood from "./components/customFood";
import Account from "./components/account";
import Setup from "./components/Setup"
import Setup2 from "./components/Setup2"
import Setup3 from "./components/Setup3"
import SetupSettings from "./components/SetupSettings"
import Setup4 from "./components/Setup4";


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
                <Navbar /> <SearchFood /> <Footer />
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          ></Route>

          <Route
            path="/settings"
            element={
              <>
                <Navbar /> <Settings /> <Footer />
              </>
            }
          ></Route>

          <Route
            path="/account"
            element={
              <>
                <Navbar /> <Account /> <Footer />
              </>
            }
          ></Route>

          <Route
            path="/changepassword"
            element={
              <>
                <Navbar /> <ChangePassword /> <Footer />
              </>
            }
          ></Route>

          <Route
            path="/changeusername"
            element={
              <>
                <Navbar /> <ChangeUsername /> <Footer />
              </>
            }
          ></Route>

          <Route
            path="/statistics"
            element={
              <>
                <StatisticsPage />
              </>
            }
          ></Route>

          <Route
            path="/rewards"
            element={
              <>
                <RewardsPage />
              </>
            }
          ></Route>

          <Route
            path="/notification"
            element={
              <>
                <NotificationPage />
              </>
            }
          ></Route>
          <Route
            path="/activities"
            element={
              <>
                <ActivitiesOverview />
              </>
            }
          ></Route>
          <Route
            path="/activities/add"
            element={
              <>
                <AddActivities />
              </>
            }
          ></Route>
          <Route
            path="/activities/add/custom"
            element={
              <>
                <AddCustomActivity />
              </>
            }
          ></Route>
          <Route
            path="/dietsearch"
            element={
              <>
                <DietSearchPage />
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
           <Route
            path="/SetupSettings"
            element={
              <>
                <Navbar /><SetupSettings/>
              </>
            }
          ></Route>
                     <Route
            path="/Setup4"
            element={
              <>
                <Navbar /> <Setup4/>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </UserSession>
  );
}

export default App;
