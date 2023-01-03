import React from "react";
import { skblog} from "./defltblog";
import { RiSendPlaneFill } from 'react-icons/ri';
class NewBlog extends React.Component {



    constructor(props){
        super(props)
        this.state = { subject:'', description:'',date:'',tab:skblog}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event){
        const { subject, description, date } = this.state
        skblog.push({
            subject:this.state.subject ,
            description: this.state.description,
            date: new Date()
        })
        alert("blog posted")
        event.preventDefault()

    }


    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    render(){



        return(
            <div>
               
                <form onSubmit={this.handleSubmit}>
<br />
                    <div>
                        <label htmlFor='subject'>subject</label>
                        <br />
                        <input
                            name='subject'
                            placeholder='subject'
                            value={this.state.subject}
                            onChange={this.handleChange}
                        />
                    </div>
<br />

                    <div>
                        <label htmlFor='description'>description</label>
                        <br />
                        <input
                            name='description'
                            placeholder='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <br />
                        <button ><RiSendPlaneFill/>Post</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default NewBlog