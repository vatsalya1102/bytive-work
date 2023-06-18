import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import SideNavbar from './components/sidenavbar/SideNavbar';
import Home from './pages/Home';
import Timesheet from './pages/Timesheet';
import Client from './pages/Client';
import Project from './pages/Project';

function App() {
  return (
    <div className="App">
      <Router>
        <SideNavbar>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/timesheet' element={<Timesheet />} />
            <Route exact path='/client' element={<Client />} />
            <Route exact path='/project' element={<Project />} />
          </Routes>
        </SideNavbar>
      </Router>
    </div>
  );
}

export default App;
