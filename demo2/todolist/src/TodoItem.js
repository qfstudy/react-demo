import React,{Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
  constructor(props){
    super(props)
    this.handleCLick=this.handleCLick.bind(this)
  }
  render(){
    // 当父组件render函数执行的时候，子组件render函数也重新执行一次
    const {content,test} = this.props
    return(
      <div onClick={this.handleCLick}>
        {test}-{content}
      </div>
    )
  }
  handleCLick(){
    const {deleteItem,index}=this.props
    deleteItem(index)
  }
}

TodoItem.propTypes={
  test: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps={
  test: '555'
}

export default TodoItem