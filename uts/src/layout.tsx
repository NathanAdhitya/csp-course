import { clsx } from "clsx";
import React from "react";
import { NavLink, Outlet } from "react-router";
import { useCart } from "./lib/CartContext";

const NavbarLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
    return (
        <NavLink to={to} className="hover:underline">
            {({ isActive }) => (
                <span className={clsx(isActive ? "font-bold" : "")}>
                    {label}
                </span>
            )}
        </NavLink>
    );
};

const Navbar: React.FC = () => {
    const [cart] = useCart();
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">Beauty and Luxury's Products</div>
                <ul className="flex space-x-4">
                    <li>
                        <NavbarLink to="/" label="Home" />
                    </li>
                    <li>
                        <NavLink to="/cart" className="hover:underline">
                            {({ isActive }) => (
                                <span
                                    className={clsx(
                                        isActive ? "font-bold" : ""
                                    )}
                                >
                                    Cart ({cart.length})
                                </span>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
