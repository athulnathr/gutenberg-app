import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from "styled-components";
import routes from "./routes";

const Pages = () => {

    useTheme();
    return (
        <Router>
            <Routes>
                 {
                    routes.map((route) => (
                        <Route path={route.path} element={route.element} key={route.path}/>
                    ))
                 }
            </Routes>
        </Router>
    )
}

export default Pages;