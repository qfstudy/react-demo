import React,{Component} from 'react'

class TodoItem extends Component{
  constructor(props){
    super(props)
    this.handleCLick=this.handleCLick.bind(this)
  }
  render(){
    const {content} = this.props
    return(
      <div onClick={this.handleCLick}>
        {content}
      </div>
    )
  }
  handleCLick(){
    const {deleteItem,index}=this.props
    deleteItem(index)
  }
}

export default TodoItem