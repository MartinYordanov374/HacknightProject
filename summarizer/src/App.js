import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path = '/' Component={HomePage}/>
        <Route path = '*' Component={ErrorPage}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
