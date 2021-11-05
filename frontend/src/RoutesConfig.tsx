import { BrowserRouter, Route, Routes } from "../node_modules/react-router-dom/index";
import Home from "./pages/Home/index";
import Dashboard from "./pages/Dashboard/index";

const RoutesConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesConfig;