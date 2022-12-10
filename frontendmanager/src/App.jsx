import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainLayout from "./components/layouts/MainLayout";
import { ProtectedRoute } from "./components/common/ProtectedRoute";
import HomePage from "./pages/Home/HomePage";
import ProductListPage from "./pages/ProductList/ProductListPage";
import AddProductPage from "./pages/AddProduct/AddProductPage";
import UserListPage from "./pages/UserListPage/UserListPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProductPage from "./pages/Product/ProductPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import Oder from "./components/Oder/Oder";
import EditUser from "./components/EditUser/EditUser";
import EditProduct from "./components/EditProduct/EditProduct";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainLayout />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRoute/>}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    
                    <Route path="/addproduct" element={<AddProductPage />} />
                    <Route path="/productlist" element={<ProductListPage />} />
                    <Route path="/productlist/view/:id" element={<ProductPage />} />
                    <Route path="/product-list/edit/:id" element={<EditProduct />} />

                    <Route path="/oder" element={<Oder />} />
                    
                    <Route path="/user-list" element={<UserListPage />} />
                    <Route path="/user-list/view/:id" element={<UserProfilePage />} />
                    <Route path="/user-profile-edit/:id" element={<EditUser />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
