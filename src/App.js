import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar exact={true} />
      <Switch>
        {/* <Route path="/discover" component={DiscoverMoviesPage} /> */}
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* <Route path="/" component={HomePage} /> */}
      </Switch>
    </div>
  );
}

export default App;
