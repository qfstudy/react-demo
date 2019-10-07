import React from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

const TodoListUI=(props)=>{
  return(
    <div style={{padding: '10px'}} >
      <div>
        <Input 
          onChange={props.handleInputChange}
          value={props.inputValue} 
          placeholder='todo info' 
          style={{marginRight: '10px',width: '300px'}}/>
        <Button 
          onClick={props.handleBtnClick}
          type="primary">
            提交
        </Button>
      </div>
      <div>
        <List
          style={{width: '300px',marginTop: '10px'}}
          bordered
          dataSource={props.list}
          renderItem={(item,index) => (
            <List.Item onClick={()=>{props.handleItemDelete(index)}}>
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

// class TodoListUI extends Component{
//   render(){
//     return(
//       <div style={{padding: '10px'}} >
//         <div>
//           <Input 
//             onChange={this.props.handleInputChange}
//             value={this.props.inputValue} 
//             placeholder='todo info' 
//             style={{marginRight: '10px',width: '300px'}}/>
//           <Button 
//             onClick={this.props.handleBtnClick}
//             type="primary">
//               提交
//           </Button>
//         </div>
//         <div>
//           <List
//             style={{width: '300px',marginTop: '10px'}}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item,index) => (
//               <List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     )
//   }
// }

export default TodoListUI