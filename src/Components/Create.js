import React, { Component } from "react";

class Create extends Component{
    toggleBtn(){
        var btn1 = document.getElementById('btn1');
        if(btn1.style.display !== 'none'){
            btn1.style.display = 'none';
        } else{
            btn1.style.display = 'block';
        }
    }
    render(){
        return(
            <div>
                <p className="toggle"><input type="submit" value="+ Catagory" id="btn2"
                onClick={function(){this.toggleBtn()}.bind(this)}
                ></input></p>
                <div id="btn1">
                    <form action="/create_process" method="post" onSubmit={function(e){
                        e.preventDefault();
                        console.log(e);
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                    }.bind(this)}>
                        <p><input type="text" name="title" placeholder="할일을 입력해주세요"></input></p>
                        <p><textarea name="desc" placeholder="할일의 구체적인 계획"></textarea></p>
                        <input type="submit" value="ADD"></input>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default Create;