import React, { Component } from "react";
class UpdateCatagory extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return(
            <div>
                <h3>Edit</h3>
                <form action="/create_process" method="post"
                onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                        this.props.id,
                        this.props.title,
                        this.props.desc
                    );
                }.bind(this)}>
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <p>
                        <input 
                        type="text" name="title" placeholder="title" 
                        value={this.state.title} onChange={this.inputFormHandler}
                        ></input>
                    </p>
                    <p>
                        <textarea 
                        name="desc" placeholder="description"
                        value={this.state.desc} onChange={this.inputFormHandler}
                        ></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </div>
        )
    }
}

export default UpdateCatagory;