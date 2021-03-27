import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Countries from "./pages/Countries";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Footer />
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/countries" component={Countries} exact />
        <Route path="/details/:name" component={Details} />
      </Switch>
    </main>
  );
}

export default App;
