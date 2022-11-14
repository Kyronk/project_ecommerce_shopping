import logo from '../logo.svg';
import './App.scss';

import {
    BrowserRouter as Router,
    Switch, // this is remove in ver 5.3.0 or height
    Routes,
    Route,
    Link
} from "react-router-dom";
import MainHome from './Page/MainHome/MainHome';
import LoginUser from './Auth/Login/LoginUser';
import Landing from './Layout/Landing';
import Auth from './Views/Auth';
import AuthContextProvider from '../Context/AuthContext';


function App() {
    return (
        <AuthContextProvider>
            <Router>
            <div className='app'>
                <header className="App-header">
                    <Switch>
                        <Route exact path="/">
                            <Landing />
                        </Route>
                        <Route
                            exact
                            path="/login"
                            render={(props) => <Auth {...props} authRoute="login" />}
                        />
                        <Route
                            exact
                            path="/register"
                            render={(props) => <Auth {...props} authRoute="register" />}
                        />
                    </Switch>
                </header>
            </div>
        </Router>
        </AuthContextProvider>
    );
}

export default App;
