import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import React from "react";
import { skblog} from "./defltblog"
import ListAllBlogs from "./disppost";
import NewBlog from "./Addpost";
import Home from "./Home";
import { SiHomebridge } from 'react-icons/si';
import Button from 'react-bootstrap/Button';
class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mytab:skblog
        };


    }
    render() {
        return (

            <header className="App-header">
                <h1>Blog </h1>




                <Link to="/Blogs/Addpost"><Button variant="outline-warning">Creat a post</Button></Link>
                <br />
                <Link to="/Blogs/disppost"><Button variant="outline-warning">list all posts</Button></Link>
           





                <Routes>
                    <Route path="/Addpost/*" element={<NewBlog/>}/>
                    <Route path="/disppost/*" element={<ListAllBlogs/>}/>
                    <Route path="/Home/*" element={<Home />} />


                </Routes>
                <br />
     <Link to="/*"><Button variant="outline-info"><SiHomebridge/></Button></Link>

            </header>
        );
    }

}

export default Blogs;