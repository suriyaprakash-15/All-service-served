// import logo from './logo.svg';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Cards from "./components/Cards/Cards";
// import Grocery from "./components/Grocery/Grocery";

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//                 <Route path="/" element= {Cards} />
//                 <Route path="/Grocery" element ={<Grocery/>} />
//             </Routes>
//     </div>
//   );
// }

// export default App;



import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './components/Cards/Cards';
import Grocery from './components/Grocery/Grocery';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/Grocery" element={<Grocery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
