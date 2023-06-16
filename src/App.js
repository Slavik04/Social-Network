import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import {Outlet} from "react-router-dom";
import {store} from "./redux/store";

function App() {
  return (
      <div className="container wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Outlet context={[store]}/>
        </div>
      </div>
  );
}

export default App;
