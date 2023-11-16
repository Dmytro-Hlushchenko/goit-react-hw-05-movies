import { Outlet } from "react-router-dom";
import { Link } from "./Layout.styled";
import { Suspense } from "react";

export default function Layout() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Suspense fallback={<div>Loading...</div>} >
                <Outlet />
            </Suspense>
            
        </header>
        
    )
};