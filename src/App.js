import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import Blogpost from "./pages/Blogpost";
import Error from "./pages/Error";
import Login from "./pages/Login";
//import Register from "./pages/Register";
import Logout from "./pages/Logout";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
      
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/blog/:slug" element={<Blogpost />}></Route>
      <Route path="*" element={<Error />}></Route>
      </Routes>
      </BrowserRouter>


  
    </>    
  );
}


/*<Route path="/" element={<Login />} />
<Route path="/login" element={<Login />} />
<Route path="/homepage" element={<Homepage />} />
<Route path="/register" element={<Register />} />
<Route path="/logout" element={<Logout />} />
<Route path="/blog" element={<Blog />} />
<Route path="/blog/:slug" element={<Blogpost />} />
<Route path="*" element={<Error />} />*/