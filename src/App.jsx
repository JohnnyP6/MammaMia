import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from './pages/LoginPage';
import './App.css'

const App = () => {
return (
<div>
<Navbar />
{/* <Home /> */}
{/* <RegisterPage /> */}
<LoginPage />
<Footer />
</div>
);
};
export default App;