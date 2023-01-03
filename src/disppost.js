import './App.css';
import React from "react";
import { skblog} from "./defltblog"

class ListAllBlogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogtab:skblog
        };


    }
    render() {
        var newtab = this.state.blogtab.map  ((k) =>  <tr>
            <td>{k.subject}</td>
            <td>{k.description}</td>
            <td>{k.date.getDate() + "-" + (k.date.getMonth()+1) + "-" + k.date.getFullYear() }</td>
        </tr>   )
        return (

            <div>
                <h1> List of posts</h1>




                <center>
                    <table>
                        <tr>
                            <th>Subject</th>
                            <th>Description</th>
                            <th>Date </th>
                        </tr>
                        {newtab}
                    </table>
                </center>








            </div>
        );
    }

}

export default ListAllBlogs;












