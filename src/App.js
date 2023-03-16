import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (

    <>
      <Navbar />
      <Routes>

        {/* path = shows the address (default by "/" as localhost300 )  and element for the "COMPONENT" */}

        {/* http://localhost:3000/ */}
        <Route path='/' element={<Home />} />

        {/* http://localhost:3000/about */}
        <Route path='about' element={<About />} />

      </Routes>
    </>

  );
}

export default App;
