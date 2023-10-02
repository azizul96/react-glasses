import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div><Toaster/></div>
        </div>
    );
};

export default Layout;