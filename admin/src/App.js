import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import AnimatedRoute from "./Page/AnimatedRoute";
import Navbar from "./Component/Navbar";
import { Helmet } from "react-helmet";
function App() {
    return (
        <Router>
            <Helmet>
                <title>แผงควบคุม ‹ สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต 1 </title>
                <meta name="description" content="แผงควบคุม ‹ สำนักงานเขตพื้นที่การศึกษาประถมศึกษาเชียงใหม่ เขต 1 " />
            </Helmet>
            <Navbar />
            <AnimatedRoute />
        </Router>
    );
}

export default App;
