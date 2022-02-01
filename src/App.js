import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";

// -------------------------------------------------- //

function App() {
  return (
    <Router>
      {/* <p>Techvibes Coding Challenge</p>
      <Link to="/login">
        <span>Login Page</span>
      </Link> */}
      {/* <LoginPage /> */}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/bookables" element={<BookablesPage/>}/>
          <Route path="/users" element={<UsersPage/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
