
import './App.css';

import React from "react";
import { sk} from "./defaultcont"


import Table from 'react-bootstrap/Table';

class DisplayContacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mytab:sk
        };


    }
    render() {
        var allcontactes = this.state.mytab.map  ((f,i) =>  <tr>
            <td>{f.name}</td>
            <td>{f.email}</td>
            <td>{f.tel}</td>
        </tr>   )
        return (

            <div>
                <h1>Contacts list </h1>




                <center>
                    <Table striped bordered hover    >
                        <tr>
                            <th>Name</th>

                            <th>Email</th>
                           
                            <th>Phone Number</th>
                        </tr>
                        {allcontactes}
                    </Table>
                </center>








            </div>
        );
    }

}

export default DisplayContacts;












