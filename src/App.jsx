import Carousel from "./components/carousel";
import Form from "./components/form";
import Description from "./components/description";
import HeroPage from "./components/hero";

function App() {
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-text mx-auto">
            <b className="header text-primary ">USAEC</b>
          </span>
        </nav>
      </div>

      <div className="body-container">
        <HeroPage />
        <hr /> {/* Horizontal line */}
        <div className="spacer"></div>

        <Description />
        
          <div className="spacer"></div>

          <div id="form-section">
            <Form />
          </div>
              </div>
              <div className="spacer"></div>
              <div className="footer-container text-primary">
          <footer className="footer ">&copy; USAEC (Ohaji) 2024</footer>
              </div>
            </>
          );
}

export default App;