import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Dashboard  from "./components/Dashboard";

const MenuRoutes = () => {
    return (
    <Routes>
        <Route element={<Dashboard/>}>
            <Route path='/' element={<Home/>} />
            <Route path='about' element={<About/>} />
        </Route>
    </Routes>
    )
}

export default MenuRoutes;