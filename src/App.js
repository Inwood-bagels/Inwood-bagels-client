import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Menu from './components/Menu'
import Location from './components/Location'
import Order from './components/Order'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="is-light">
          <Router>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/location" component={Location} />
                <Route  path="/order" component={Order} />
                <Route  path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
          </Router>
          <Footer/>
      </div>
  );
}

export default App;
