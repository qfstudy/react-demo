import React,{Component} from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store/index.js'

class TodoList extends Component{
  constructor(props){
    super(props)
    this.state=store.getState()
    this.handleStoreChange=this.handleStoreChange.bind(this)
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleBtnClick=this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render(){
    return(
      <div style={{padding: '10px'}} >
        <div>
          <Input 
            onChange={this.handleInputChange}
            value={this.state.inputValue} 
            placeholder='todo info' 
            style={{marginRight: '10px',width: '300px'}}/>
          <Button 
            onClick={this.handleBtnClick}
            type="primary">
              提交
            </Button>
        </div>
        <div>
          <List
            style={{width: '300px',marginTop: '10px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => (
              <List.Item onClick={this.handleItemDelete.bind(this,index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
  handleInputChange(e){
    const action={
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleBtnClick(){
    const action={
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }

  handleItemDelete(index){
    const action={
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action)
  }
}

export default TodoList