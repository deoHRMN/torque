import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/admin/Dashboard";
import AdminCategory from "./pages/admin/Category";
import AdminPart from "./pages/admin/Part";
import Search from "./pages/Search";
import AdminMake from "./pages/admin/AddMake";
import AdminModel from "./pages/admin/Model";
import AdminParts from "./pages/admin/Parts";
import AdminPartUpdate from "./pages/admin/PartUpdate";
import Inventory from "./pages/Inventory";
import PartView from "./pages/PartView";
import CategoriesList from "./pages/CategoriesList";
import CategoryView from "./pages/CategoryView";
// import PrivateRoute from "./components/routes/PrivateRoute";
import AdminRoute from "./components/routes/AdminRoute";
import "bootstrap/dist/css/bootstrap.min.css";

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      404 | Page not Found.
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/category/:slug" element={<CategoryView />} />
        <Route path="/search" element={<Search />} />
        <Route path="/part/:slug" element={<PartView />} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<Dashboard />} />
          <Route path="admin/category" element={<AdminCategory />} />
          <Route path="admin/part" element={<AdminPart />} />
          <Route path="admin/part/update/:slug" element={<AdminPartUpdate />} />
          <Route path="admin/parts" element={<AdminParts />} />
          <Route path="admin/make" element={<AdminMake />} />
          <Route path="admin/model" element={<AdminModel />} />
        </Route>
        <Route path="*" element={<PageNotFound />} replace />
      </Routes>
    </BrowserRouter>
  );
}
