import './App.css'
import NavBar from "./components/NavBar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Menu from './components/Menu'
import Location from './components/Location'
import Order from './components/Order'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from "./components/Home"
import Footer from "./components/Footer"
const divStyle = {
    backgroundImage: 'url("https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/246711796_4526685364041326_8887827131373867354_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=q-f-K3gucYgAX90l9NR&_nc_ht=scontent-lga3-1.xx&oh=a78b78b82a5b6839b20945db544d7125&oe=617A570F")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

function App() {
    return (
        <div className="is-light" style={divStyle}>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/menu" component={Menu}/>
                    <Route exact path="/location" component={Location}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/signin" component={Signin}/>
                    <Route exact path="/signup" component={Signup}/>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
