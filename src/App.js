import './App.css';
import Header from "./components/header/Header";

function App() {
  return (
      <div className="container wrapper">
          <Header/>
        <nav className="nav">
          <div>
            <a href="#">Profile</a>
          </div>
          <div>
            <a href="#">Messages</a>
          </div>
          <div>
            <a href="#">News</a>
          </div>
          <div>
            <a href="#">Music</a>
          </div>
          <div>
            <a href="#">Settings</a>
          </div>
        </nav>
        <div className="content">
          Main content
        </div>
      </div>
  );
}

export default App;
