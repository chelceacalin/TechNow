import { useContext, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import CategoryManagement from "./pages/CategoryManagement/CategoryManagement";
import Login from "./pages/Login/Login";
import Movies from "./pages/Movies/Movies";
import MyProfile from "./pages/MyMovies/MyProfile";
import NotFound from "./pages/NotFound/NotFound";
import LoginProvider, { UserLoginContext } from "./utils/context/LoginProvider";
import Authenticated from "./utils/protected/Authenticated";
import ProfileRoute from "./utils/protected/ProfileRoute";
import AdminRoute from "./utils/protected/AdminRoute";
function App() {
  return (
    <div className="app-container">
      <LoginProvider>
        <Router>
          <MainContent />
        </Router>
        <ToastContainer />
      </LoginProvider>
    </div>
  );
}

function MainContent() {
  const [initialized, setInitialized] = useState(false);
  const {
    isAdmin,
    setIsAdmin,
    username,
    setUsername,
    token,
    setToken,
    isLoggedIn,
    setIsLoggedIn,
    id,
    setID,
    email,
    setEmail,
  } = useContext(UserLoginContext);

  useEffect(() => {
    setInitialized(true);
  }, []);

  if (!initialized) return null;

  if (isLoggedIn) {
    return (
      <>
        <div className="h-screen">
          <Navbar />
        </div>
        <Routes>
          <Route element={<Authenticated />}>
            <Route index path="/" element={<Movies />} />
            <Route element={<ProfileRoute />}>
              <Route path="/myprofile/:id" element={<MyProfile />} />
            </Route>

            <Route element={<AdminRoute />}>
              <Route
                path="/categoryManagement"
                element={<CategoryManagement />}
              />
            </Route>

            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    );
  } else {
    return (
      <Routes>
        <Route element={<Login />} index="/login" />
      </Routes>
    );
  }
}

export default App;
