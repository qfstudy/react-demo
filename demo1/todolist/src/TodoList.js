import React, {Component,Fragment} from 'react'
import TodoItem from './TodoItem.js'
import './style.css'

class TodoList extends Component{
  constructor(props){
    super(props)
    this.state={
      inputValue: '',
      list: []
    }
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleBtnClick=this.handleBtnClick.bind(this)
    this.handleItemDelete=this.handleItemDelete.bind(this)
  }

  render(){
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input 
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem(){
    return this.state.list.map((item,index)=>{
      return (
        <div key={index}>
          <TodoItem 
            content={item} 
            index={index}
            deleteItem={this.handleItemDelete}/>
        </div>
      )
    })
  }

  handleInputChange(e){
    // this.setState({
    //   inputValue: e.target.value
    // })
    /**新版语法 */
    const value=e.target.value
    this.setState(()=>{
      return {
        inputValue: value
      }
    })
  }
  handleBtnClick(){
    // this.setState({
    //   list: [...this.state.list,this.state.inputValue],
    //   inputValue: ''
    // })

    this.setState((prevState)=>{
      return {
        list: [...prevState.list,prevState.inputValue],
        inputValue: ''
      }
    })
  }
  handleItemDelete(index){
    this.setState((prevState)=>{
      const list=[...prevState.list]
      list.splice(index,1)
      return{
        list
      }
    })
    // this.setState({
    //   list: list
    // }) 
  }
}

export default TodoList