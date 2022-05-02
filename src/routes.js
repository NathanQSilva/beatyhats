import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Componentes fixos
import Menu from './components/Menu';
import Header from './components/Header';
// Paginas da aplicação
import Produtos from './pages/Produtos'
import HomePage from "./pages/HomePage";
import Contato from './pages/Contato';
import Carrinho from './pages/Carrinho';
import Login from './pages/Login';

export default function AppRouter() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path='/' element={<Header />}>
                    <Route index element={<HomePage />} />
                    <Route path='produtos' element={<Produtos />} />
                    <Route path='contato' element={<Contato />} />
                    <Route path='carrinho' element={<Carrinho />} />
                    <Route path='login' element={<Login />} />
                </Route>
            </Routes>
        </Router>
    );
}