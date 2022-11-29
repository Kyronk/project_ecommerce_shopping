import './App.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './page/home/Home';
import LoginPage from './page/loginPage/LoginPage';
import CartPage from './page/cartPage/CartPage';
import Page404 from './page/page404/Page404';
import About from './page/about/About';
import ProductItemPage from './page/productItemPage/ProductItemPage';
import ProductListPage from './page/productListPage/ProductListPage';
import UserProfilePage from './page/userProfilePage/UserProfilePage';
import UserEditPage from './page/userEditPage/UserEditPage';

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/user-profile" element={<UserProfilePage />} />
                    <Route path="/user-profile-edit" element={<UserEditPage />} />
                    
                    <Route path="/product-list" element={<ProductListPage/>} />
                    
                    <Route path="/product-list/product-item/:id" element={<ProductItemPage />} />

                    <Route path="/cart" element={<CartPage />} />
                    
                    <Route path="/about" element={<About /> } />
                    {/* <Route path="/register" element={<Register />} /> */}
                    <Route path="/login" element={<LoginPage />} />

                    <Route path="*" element={<Page404  />} />

                </Routes>
        </Router>
    );
}

export default App;
