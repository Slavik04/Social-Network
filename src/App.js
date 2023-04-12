import './App.css';
import Header from "./components/header/Header";
import {NavLink} from "react-router-dom";

function App() {
  return (
      <div className="container wrapper">
          <Header/>
        <nav className="nav">
          <div>
            <NavLink to="/profile">Profile</NavLink>
          </div>
          <div>
            <NavLink to="/messages">Messages</NavLink>
          </div>
          <div>
            <NavLink to="/news">News</NavLink>
          </div>
          <div>
            <NavLink to="/music">Music</NavLink>
          </div>
          <div>
            <NavLink to="/settings">Settings</NavLink>
          </div>
        </nav>
        <div className="content">
          Main content
        </div>
      </div>
  );
}

export default App;
