import React, { Component } from "react";

class CatagoryOrder extends Component{
  shouldComponentUpdate(newProps, newState){
    console.log('===>order shouldComponentUpdate',
      newProps.data,
      this.props.data
    );
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }

    render(){
      console.log('-->order render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
          <li key={data[i].id}>
            <input type="checkbox"></input>
            <a 
              href={"/catagory/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
            >{data[i].title}</a>
            <input type="button" value="DEL" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('delete');
            }.bind(this)}></input>
            <input type="button" value="EDIT" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('edit');
            }.bind(this)}></input>
          </li>);
          i = i + 1;
      }
        return(
          <nav>
            <ul>
            {lists}
          </ul>
          </nav>
          
        )
    }
}

export default CatagoryOrder;