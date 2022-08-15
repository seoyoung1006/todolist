import React, { Component } from "react";

class Create extends Component{
    render(){
        return(
            <div>
                <button type="submit" value="+ Catagory" onClick={function(e){
                    e.preventDefault();
                    alert("visual");
                }.bind(this)}>+Catagory</button>
            </div>
        )
    }
}

export default Create;