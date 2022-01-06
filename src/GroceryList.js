import { Component } from 'react';
import check from './check-mark.png';
export class GroceryList extends Component{
constructor(){
    super();
    this.state={
        input:'',
        groceryList:[]
    }
}
onChangeEvent(e){
    this.setState({input:e});
    console.log(e)
}
addItem(userIn){
    if(userIn===''){
        alert('please enter an item')
    }
    else{
    let listArray=this.state.groceryList;
    console.log(listArray);
    listArray.push(userIn);
    this.setState({groceryList:listArray, input:''})
    }
}
crossedWord(event){
    const li=event.target;
    li.classList.toggle('crossed')
}
deleteItem(){
    let listArray=this.state.groceryList;
    listArray=[];
    // listArray.length=0; - другой способ опустошить массив
    this.setState({groceryList:listArray});
}
onForm(e){
    e.preventDefault();
}
render(){
    return(
        <div>
            <form onSubmit={this.onForm}>
        <div className='container'>
            <input type='text'
                   placeholder="My list"
                   onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                   value={this.state.input}/>
        </div>
        <div className='container'>
            <button onClick={()=>this.addItem(this.state.input)} className='add'>Add</button>
        </div>
        <ul>
            {this.state.groceryList.map((x, index)=>(
                <li onClick={this.crossedWord} key={index}><img src={check} alt="check"/>{x}</li>
            ))}
            
        </ul>
        <div className='container'>
        <button onClick={()=>this.deleteItem()} className='delete'>Delete</button>
        </div>
        </form>
        </div>
    )
}
}