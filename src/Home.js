//import logo from './logo.svg';
import './App.css';
import {Link, Route,  Routes} from "react-router-dom";
import React from "react";
import Contacts from "./Contacts"
import Blogs from "./Blogs"
import { FcContacts } from 'react-icons/fc';
import { FaBlog } from 'react-icons/fa';

class Home extends React.Component {
 
    render() {
        return (

            <div className="Home">
                <header className="App-header">
                <img src={ require('./sh.png') } />

                   

                    <p>
                        Welcome to Skander Benkhodja and Gheroucha Haitem Page
                    </p>
                    <p>To check the contact page click here <Link to="Contacts/*" ><FcContacts/></Link></p>
                    <p>To check the blog page click here  <Link to="Blogs/*" ><FaBlog/></Link> </p>

                </header>



                <Routes>

                    <Route path="Blogs/*" element={<Blogs />} />
                    <Route path="Contacts/*" element={<Contacts />} />

                </Routes>

            </div>



        );
    }
}

export default Home;






