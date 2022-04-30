import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Menu from './components/Menu';
import Header from './components/Header';

import Produtos from './pages/Produtos'

import HomePage from "./pages/HomePage";

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route index element={<HomePage />} />
                        <Route path='produtos' element={<Produtos />} />
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}