import React from 'react';
import  './App.css'
import TodoItems from"./TodoItems";
class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      items : []
    };
    this.addItem= this.addItem.bind(this)
  }
  addItem(e){
    if (this.inputElement.value !==""){
      var newItem = { 
        text:this.inputElement.value,
        key:Date.now()
      };
      this.setState((prevState) =>{
        return{
          items:prevState.items.concat(newItem)
        };
      } );
      this._inputElement.value="";
    }
    console.log(this.state.items);
    e.preventDefault(); // this prevent the form from reloading and clears everything out
  }
  render(){
    return(
      <div className="todoListMain">
          <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this.inputElement =a}
            placeholder="Enter task">

            </input>
            <button type="submit">Add</button>
          </form>

          </div>
          <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}



export default TodoList
