import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navigation/Navbar";
import CategoryDetail from "./components/Category/CategoryDetail";
import PostDetail from "./components/Posts/PostDetail";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


function App() {

  return (
  <div className="app">
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/posts/:id" element={<PostDetail/>}/>
        <Route path="/category/:id" element={<CategoryDetail/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
