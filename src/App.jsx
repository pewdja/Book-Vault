import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Discovery from './components/Discovery';
import Library from './components/Library';
import About from './components/About';
import NotFound from './components/NotFound';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <Navbar />
            <main className="flex-1 md:pl-64 min-h-screen pb-24 md:pb-0">
            <Routes>
                <Route path="/" element={<Discovery />} />
                <Route path="/library" element={<Library />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            </main>
        </div>
    )
}

