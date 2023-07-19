import './App.scss';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
// importing pages
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import { NotFound } from './Pages/404/404';
import { Projects } from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      {/* defining routes to the pages*/}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

// basic layout of the whole application
function Layout() {
  return (
    <div className='layout'>
      <header>
        <img src="logo.gif" alt="logo" className="logo" />
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  )
};

export default App;
