
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserSession from "./UserSession";
import Navbar from "./components/navbar";
import SearchFood from "./components/searchFood";



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
                <Navbar /> <SearchFood/>
              </>
            }
          ></Route>
          
        </Routes>
      </BrowserRouter>
    </UserSession>
  );
}

export default App;
