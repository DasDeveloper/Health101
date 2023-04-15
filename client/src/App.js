
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserSession from "./UserSession";
import Navbar from "./components/navbar";
import SearchFood from "./components/searchFood";
import Footer from "./components/footer";
import Settings from "./components/settings";


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
            path="/settings"
            element={
              <>
                <Navbar /> <Settings/> <Footer/>
              </>
            }
          ></Route>
          
        </Routes>
      </BrowserRouter>
    </UserSession>
  );
}

export default App;
