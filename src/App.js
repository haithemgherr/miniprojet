import './App.css';
import { Route, Routes} from "react-router-dom";
import React from "react";
import Contacts from "./Contacts"
import Blogs from "./Blogs"
import Home from "./Home"

export default function App() {

  return (

        <div className="App">

            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="Blogs/*" element={<Blogs />} />
                <Route path="Contacts/*" element={<Contacts />} />

            </Routes>

        </div>



  );
}







