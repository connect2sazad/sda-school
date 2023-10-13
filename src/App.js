// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import MenuBar from './components/menubar.component';
import TopBar from './components/topbar.component';

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <MenuBar />
      </Router>

    </>
  );
}

export default App;
