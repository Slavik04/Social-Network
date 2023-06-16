import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
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
