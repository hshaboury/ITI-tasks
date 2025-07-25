import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Team from "./Components/Team";
import Footer  from "./Components/Footer";

function App() {
    return (
        <>
        <div className="wrapper">
          <Header />
          <Hero />
        </div>
        <Services />
        <Portfolio />
        <Team />
        <Footer/>
        </>
    );
}

export default App;
