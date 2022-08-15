import React, { Component } from "react";

class CreateCatagory extends Component{
    render(){
        return(
        <div>
            <form action="/create_process" method="post" onSubmit={function(e){
                e.preventDefault();
                console.log('===input');
                this.props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value
                );
            }.bind(this)}>
                <p><input type="text" name="catagory" placeholder="할일을 입력해주세요"></input></p>
                <p><textarea name="desc" placeholder="할일의 구체적인 계획"></textarea></p>
                <input type="submit" value="ADD"></input>
            </form>
          
        </div>
        )
    }
}

export default CreateCatagory;