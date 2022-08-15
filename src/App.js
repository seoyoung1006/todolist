import React, { Component } from 'react';
import './App.css';
import CatagoryOrder from './Components/CatagoryOrder';
import Create from './Components/Create';
import CreateCatagory from './Components/CreateCatagory';
import Header from './Components/Header';
import Main from './Components/Main';
import UpdateCatagory from './Components/UpdateCatagory';

class App extends Component {
  constructor(props){
    super(props);
    this.max_catagory_id = 4;
    this.state = {
      mode:'home',
      selected_catagory_id:1,
      Header: {title:'To Do List', sub: `ㅁㅁㅁ님 안녕하세요:> 할 일을 기록해주세요*^^*`},
      home:{title: 'Write', desc:`Plus your 'To do list' catagory`},
      catagory: [
        {id:1, title:'Exercise', desc:'오전 10시쯤 헬스장 가서 하체운동하기'},
        {id:2, title:'Study', desc:'점심먹고 독서실가서 개발공부하기'},
        {id:3, title:'Meeting', desc:'매주 토요일 오후 8-10시 회의'},
        {id:4, title:'House', desc:'점심먹고 설거지, 수건 건조기 돌리기'}
      ]
    }
  }
// name(){
//   var name;
//   var person = prompt('회원님 이름을 적어주세요:)');
//   if(person === null|| person === ""){
//     name = "입력해주세요:("
//   }else{
//     name = person + "님 안녕하세요:> 할 일을 기록해주세요*^^*"
//   }
//   // document.getElementById("name").innerHTML = name;
// }

getReadCatagory(){
  var i = 0;
  while(i < this.state.catagory.length){
    var data = this.state.catagory[i];
    if(data.id === this.state.selected_catagory_id){
      return data;
      // break;
    }
    i = i + 1;
  }
}

getCatagory(){
  var _title, _desc, _article = null;
  if(this.state.mode === 'home'){
    _title = this.state.home.title;
    _desc = this.state.home.desc;
    _article = <Main title={_title} desc={_desc}></Main>
  }else if(this.state.mode === 'read'){
    var _catagory = this.getReadCatagory();
    _article = <Main title={_catagory.title} desc={_catagory.desc}></Main>
  }else if(this.state.mode === 'create'){
    _article = <CreateCatagory onSubmit={function(_title, _desc){
      this.max_catagory_id = this.max_catagory_id + 1;
      var newCatagory = Array.from(this.state.catagory);
      newCatagory.push({id:this.max_catagory_id,
      title:_title,
      desc:_desc});
      this.setState({
        catagory:newCatagory,
        mode:'read',
        selected_catagory_id:this.max_catagory_id
      });
      console.log(_title,_desc);
    }.bind(this)}></CreateCatagory>
  }
  return _article;
}

  render(){
    return(
      <div className="App">
        <div className="head">
         <div className="text">
          <Header 
            title={this.state.Header.title}
            sub={this.state.Header.sub}
            onChangePage={function(){
            this.setState({mode:'home'});
            }.bind(this)}
          ></Header>
         </div>
        </div>
        <div className="order">
          <CatagoryOrder
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_catagory_id:Number(id)
            })
          }.bind(this)}
          data={this.state.catagory}
          onChangeMode={function(_mode){
            if(_mode === 'delete'){
              if(window.confirm('delete it?')){
                var newCatagory = Array.from(this.state.catagory);
                var i = 0;
                while(i < newCatagory.length){
                  if(newCatagory[i].id === this.state.selected_catagory_id){
                    newCatagory.splice(i,1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode:'home',
                  catagory:newCatagory
                });
                alert('delete!');
              }
            } else if(_mode === 'edit'){
              var _catagory = this.getReadCatagory();
              var _article = <UpdateCatagory data={_catagory} onSubmit={
                function(_id, _title, _desc){
                  var newCatagory = Array.from(this.state.catagory);
                  var i = 0;
                  while(i < newCatagory.length){
                    if(newCatagory[i].id === _id){
                      newCatagory[i] = {id:_id, title:_title, desc:_desc};
                      break;
                    }
                    i = i + 1;
                  }
                  this.setState({
                    catagory:newCatagory,
                    mode:'read'
                  });
                  console.log(_title,_desc);
                }.bind(this)}></UpdateCatagory>
            }else {
              this.setState({
                mode:_mode
              });
            }
          }.bind(this)}
          ></CatagoryOrder>
        </div>
        <Create></Create>
        {/* <CreateCatagory></CreateCatagory> */}
        {this.getCatagory()}
      </div>
    );
  }
}

export default App;
