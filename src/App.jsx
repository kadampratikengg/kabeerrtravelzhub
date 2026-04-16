import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Pages from './pages/Pages';
import Destinations from './pages/Destinations';
import Tours from './pages/Tours';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className='app-shell'>
        <main className='flex-1 pt-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pages' element={<Pages />} />
            <Route path='/destinations' element={<Destinations />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
