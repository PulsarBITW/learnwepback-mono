import React, { useState } from 'react'
import * as classes from "./styled.module.css"

type TodoItem = {
    id: string | number;
    title:string;
    description:string;
}
type TodoPreview = Omit<TodoItem, "id">;

 const TodoPage = () => {
    const [formValue, formValuesChanged] = useState<TodoPreview>({title:"",description:""})
    const [todoList, todoListChanged] = useState<TodoItem[]>([])

    const addTodo = ()=> {
        todoListChanged(todoList.slice().concat([{...formValue, id: todoList[todoList.length-1]?.id ?? 1 }]))
    }

    const formHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
        formValuesChanged({ ...formValue, [e.target.name]: e.target.value });
    }



  return (
    <div>
        <input name={"title"} value={formValue.title} onChange={formHandler}/>
        <input name={"description"} value={formValue.description} onChange={formHandler}/>
        <button onClick={addTodo}>{"Добавить задачу"}</button>
        {todoList.length ? todoList.map((el)=><Todo {...el}/>):<div>{"Нет активных задач"}</div> }
    </div>
  )
}


const Todo = (todoItem:TodoItem) => {
    return <div className={classes.todo} key={todoItem.id}><h3>{todoItem.title}</h3><p>{todoItem.description}</p></div>
}

export default TodoPage