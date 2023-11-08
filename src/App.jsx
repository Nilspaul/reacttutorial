import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from '../router';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="myContent">
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
