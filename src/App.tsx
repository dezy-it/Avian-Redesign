import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './screens';
import About from './screens/About';
import Blogs from './screens/Blogs';
import Portfolio from './screens/Portfolio';
import Product from './screens/Product';
import Services from './screens/Services';

function App() {
    return (
        <div className="">
            <Navbar />
            <div className="">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/chatter' element={<Blogs />} />
                    <Route path='/blogs/:blogId' element={<Blogs />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App