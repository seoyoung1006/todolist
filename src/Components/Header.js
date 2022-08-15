import React, { Component } from "react";

class Header extends Component {
    // name(){
    //     let text;
    //     let person = prompt("What your name?");
    
    //     if(person === null || person === ""){
    //       text= "nothing :<";
    //     }else {
    //       text = "안녕하세요" + person + "님! 오늘 하루 할 일을 기록해주세요:)";
    //     }
    //     document.getElementById("name").innerHTML = text;
    //   }
    render(){
        return(
        <header>
            <h1><a href="/" onClick={function(e){
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}>{this.props.title}</a></h1>
            {/* <input type="button" value="이름"></input> */}
            <h5>{this.props.sub}</h5>
        </header>
        )
    }
}

export default Header;