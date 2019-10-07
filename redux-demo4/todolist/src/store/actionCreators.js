import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionType.js'

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