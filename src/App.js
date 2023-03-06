import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBarr } from "./components/NavSection/NavBarr";
import { Admin } from "./components/Admin/Admin";
import { CreateNews } from "./components/CreateNews/CreateNews";
import { NewCategory } from "./components/NewCategory/NewCategory";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBarr />
                <Routes>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="" element={<div>login</div>} />
                    <Route path="/admin/createNews" element={<CreateNews />} />
                    <Route
                        path="/admin/setCategory"
                        element={<NewCategory />}
                    />
                    <Route
                        path="/admin/newsList"
                        element={<div>newsList</div>}
                    />
                    <Route
                        path="/admin/newsList"
                        element={<div>newsList</div>}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
