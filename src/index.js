import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Login from '../src/components/logreg/Login';
// import Register from '../src/components/logreg/Register';
import Dashboard from './components/Home/Dashboard';
import Cards from './components/Cards/Cards';
import Navbar from './components/Navbar/Navbar';
import Grocery from './components/Grocery/Grocery';
import Route from '../src/Grocery/Route';





import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <Dashboard/> */}
    {/* <Cards/> */}
    {/* <Navbar/> */}
    {/* <Grocery/> */}

    <Route/>

    {/* <App/> */}
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// // import App from "./App";
// import Bigrout from "./Bigbasket/Bigrout";
// import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// // import { store } from "./Redux/store";
// import { store } from "./Bigbasket/Redux/store";
// import { BrowserRouter } from "react-router-dom";
// // import { AppProvider } from "./contextAPI";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     {/* <AppProvider > */}
//       <Provider store={store}>
//         {/* <App /> */}
//         <Bigrout/>
//       </Provider>
//     {/* </AppProvider> */}
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
