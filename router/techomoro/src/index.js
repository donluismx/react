import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post
} from './components';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Navigation />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/blog" element={<Blog />}>
//         <Route path="" element={<Posts />} />
//         <Route path=":postSlug" element={<Post />} />
//       </Route>
//     </Routes>
//     <Footer />
//   </Router>
// );

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();


// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <App />
//   </>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
