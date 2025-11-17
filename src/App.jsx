import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from './pages/LoginPage';
import './App.css'
import Cart from './components/Cart'
import Pizza from './components/Pizza';

const App = () => {
return (
<div>
<Navbar />
{/* <Home /> */}
{/* <RegisterPage />
<LoginPage /> */}
{/* <Cart /> */}
<Pizza />
<Footer />
</div>
);
};
export default App;