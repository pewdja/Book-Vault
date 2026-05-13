import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Discovery from './components/Discovery';
import Library from './components/Library';
import About from './components/About';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col md:">
            <Navbar />
            <Routes>
                <Route path="/" element={<Discovery />} />
                <Route path="/library" element={<Library />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

