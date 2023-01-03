//import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import React from "react";
import NewContact from "./NewContact";
import DisplayContacts from "./ShowCont";
import Home from "./Home";
import { SiHomebridge } from 'react-icons/si';
import Button from 'react-bootstrap/Button';

class Contacts extends React.Component {
    render() {
        return (

            <header className="App-header">
                <h1>Contacts </h1>



                <Link to="/Contacts/NewContact"><Button variant="outline-warning">Add contact</Button></Link>
                <br />
                <Link to="/Contacts/ShowCont"><Button variant="outline-warning">Display contacts</Button></Link>
                <br />
              





                <Routes>
                    <Route path="/NewContact/*" element={<NewContact/>}/>
                    <Route path="/ShowCont/*" element={<DisplayContacts/>}/>
                    <Route path="/Home/*" element={<Home />} />


                </Routes>
  <Link to="/*"><Button variant="outline-info"><SiHomebridge/></Button></Link>

            </header>
        );
    }

}

export default Contacts;












