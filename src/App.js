import './App.css'
import { Routes, Route } from 'react-router-dom'
import BlogDetails from './pages/BlogDetails'
import Home from './pages/Home'
import About from './pages/About'
import CarDetails from './pages/CarDetails'
import Contact from './pages/Contact'
import CarListing from './pages/CarListing'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
