import { useState } from "react"

import style from "./style.module.css"

import Form from "../../components/Form";
import List from "../../components/List";
import Sidebar from "../../components/Sidebar"

const Home = () => {
    const [data, setData] = useState([
        {
          id: 1,
          title: "Mengerjakan Exercise",
          completed: true
        },
        {
          id: 2,
          title: "Mengerjakan Assignment",
          completed: false
        },
    ])
    
    const addTodo = (newEntry) => {
        let counterData = (data.length !== 0) ? (data[data.length - 1].id) : 0;  
        const newTodo = {id: counterData + 1, ...newEntry}           
    
        setData([...data, newTodo])
    }
    
    const deleteTodo = (id) => {
        const newListToDo  = data.filter((item) => item.id !== id)
        
        setData(newListToDo)
    }
    
    const checkTodo = (id) => {
        const newStatus = data.map((data) => {
            if(data.id === id){
                return {...data, completed: !data.completed}
            }
            else{
                return data
            }
        })
        setData(newStatus)
    }
    
    return (
        <>
        <Sidebar/>
        <div className={style.container}>
          <h1>To-Do List</h1>
          <Form addTodo={addTodo}/>
          <List todos={data} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
        </div>
        </>
    );
}

export default Home