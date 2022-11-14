import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/HomePage';
import ProductListPage from './pages/ProductList/ProductListPage';
import AboutPage from './pages/AboutPage/AboutPage';
import AddProductPage from './pages/AddProduct/AddProductPage';
import NotFound from './components/NotFound/NotFound';
import ProductPage from './pages/Product/ProductPage';
import UserListPage from './pages/UserListPage/UserListPage';

function App() {
    return (
        <BrowserRouter>

            <Sidebar>
                {/* <ToastContainer position="top-center"/> */}
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/productlist' element={<ProductListPage />} />
                    <Route path='/addproduct' element={<AddProductPage />} />
                    <Route path='/user-list' element={<UserListPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/productlist/view/:id' element={<ProductPage />} />
                    {/* <Route path='*' element={<NotFound />} /> */}
                </Routes>
                
                {/* Same as */}
                
            </Sidebar>



            {/* Toastify đang lỗi  */}
            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
        </BrowserRouter>
    );
}

export default App;
