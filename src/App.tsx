import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chart from "./components/Chart";
import ListPage from "./pages/ListPage"


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/stats" element={<Chart />}/>
                <Route path="/list" element={<ListPage />} />
            </Routes>
        </Router>
    )
}