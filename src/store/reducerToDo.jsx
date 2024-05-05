
const initialState = {
    todoList:[{id:new Date().getTime(), text:"homework", isCompleted:false}]
}

const add = "ADD"
const del = "DEL"
const cmp = "CMP"
const clr = "CLR"

export const reducerToDo = (state=initialState, {type, payload}) => {
    switch (
        type
    ) {
        case add:
            
            return {todoList:[...state.todoList,{id:new Date().getTime(), text:payload, isCompleted:false}]};
    
        default:
            return initialState;
    }
}