// import React from 'react';
// import {Switch,Route} from "react-router-dom";
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
// import ProductList from "./components/ProductList";
// import Details from "./components/Details";
// import Cart from "./components/Cart/Cart";
// import Default from "./components/Default";
// import Modal from './components/Modal';
// import { ThemeConsumer } from './components/context/ThemeContexts'

// function App() {
//   return (
//     <ThemeConsumer>
//     {({ theme }) => (
//     <React.Fragment>
//       <div className={theme? 'h-fit bg-slate-900' : 'h-fit'}>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={ProductList} />
//         <Route path="/details" component={Details} />
//         <Route path="/cart" component={Cart} />
//         <Route component={Default} />
//       </Switch>
//       <Modal />
//         </div>
     
//     </React.Fragment>
//        )}
//        </ThemeConsumer>
//   );
// }

// export default App;


import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // use Router and Routes
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from './components/Modal';
import  ThemeContext  from './components/context/ThemeContexts'; // Assuming you're using useContext for theme

function App() {
  const { theme } = useContext(ThemeContext); // Use useContext hook to get the theme

  return (
      <div className={theme ? 'h-fit bg-slate-900' : 'h-fit'}>
        <Navbar />
        <Routes> {/* Switch is now replaced with Routes */}
          <Route path="/" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Default />} /> {/* Catch-all route for undefined paths */}
        </Routes>
        <Modal />
      </div>
  );
}

export default App;
