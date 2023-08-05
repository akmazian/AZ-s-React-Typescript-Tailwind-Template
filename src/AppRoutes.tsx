import { Routes, Route } from "react-router-dom"
import Navigation from "./struct/navigation/Navigation.str"
import Home from "./pages/Home.page"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes