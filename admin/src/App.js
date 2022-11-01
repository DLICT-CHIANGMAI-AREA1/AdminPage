import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import AnimatedRoute from "./Page/AnimatedRoute";
import Navbar from "./Component/Navbar"
function App() {
    return (
        <Router>
           <Navbar />
            <AnimatedRoute />
        </Router>
    );
}

export default App;
