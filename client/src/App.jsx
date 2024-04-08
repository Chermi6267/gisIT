import './App.css';
import MainPage from './components/mainPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';


function App() {
  return (<Router>
    <Routes>
      <Route exact path="/main" element={<MainPage />} />
      <Route exact path="/" element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;