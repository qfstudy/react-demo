import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionType.js'
import axios from 'axios'

export const getInputChangeAction=(value)=>{
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const getAddItemAction=()=>{
  return {
    type:  ADD_TODO_ITEM
  }
}

export const getDeleteItemAction=(value)=>{
  return {
    type:  DELETE_TODO_ITEM,
    value
  }
}

export const initListAction=(value)=>{
  return {
    type:  INIT_LIST_ACTION,
    value
  }
}

export const getTodoList=()=>{
  return (dispatch)=>{
    axios.get('data/list.json')
    .then(res=>{
      const data=res.data
      const action=initListAction(data)
      dispatch(action)
    })
    .catch(error=>{
      console.log(error)
    })
  }
}