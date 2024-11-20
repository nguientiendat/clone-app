import MainHeader from "../components/header/Header";
import "../styles/main.css";
import "../styles/submenu.css";
import Body from "../components/body/Body";
import "../assets/css/bootstrap.min.css";
import "../styles/carousel.css";
function App() {
  return (
    <div className="App">
      <div>
        <MainHeader></MainHeader>
      </div>
      <div>
        <Body />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
