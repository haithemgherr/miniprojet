import React from "react";
import {sk} from "./defaultcont";
//import Button from 'react-bootstrap/Button';
import {RiSendPlaneFill} from 'react-icons/ri';
class NewContact extends React.Component {



    constructor(props){
        super(props)
        this.state = { email:'',name:'', address:'',tel:'',tab:sk}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event){
        const { name, email,  tel } = this.state
        sk.push({
            name:this.state.name ,
            email: this.state.email ,
            tel: this.state.tel,
        })
        alert("contact added")
        event.preventDefault()

    }


    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    render(){

        var newtab = this.state.tab.map  ((e,i) =>  <li >{e}</li>)

        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor='name'>Name</label>
                        <br />
                        <input
                            name='name'
                            placeholder='Name ...'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
<br />
                    <div>
                        <label htmlFor='email'>Email</label>
                        <br />
                        <input
                            name='email'
                            placeholder='Email ...'
                            value = {this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
<br />

                    <div>
                        <label htmlFor='tel'>Phone Number</label>
                        <br />
                        <input
                            name='tel'
                            placeholder='Phone number ...'
                            value={this.state.tel}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <br />
                        <button ><RiSendPlaneFill/>Create Contact</button>
                       <br />
    
                    </div>
                </form>
            </div>
        )
    }

}
export default NewContact