const todoReducer = (state =[], action) =>{
   switch (action.type){
       case "ADD_TODO":
           console.log(action.todo.data)
           return [action.todo.data,...state]
       case "GET_TODOS":
           console.log(action.todo.data)
           return action.todo.data
       default:
           return state;
   }
}

export default todoReducer;