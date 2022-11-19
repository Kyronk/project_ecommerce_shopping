import './App.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './page/home/Home';
import LoginPage from './page/loginPage/LoginPage';

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    {/* <Route path="/register" element={<Register />} /> */}
                </Routes>
        </Router>
    );
}

export default App;
