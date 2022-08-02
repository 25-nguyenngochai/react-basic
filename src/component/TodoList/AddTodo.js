import React, {useState} from "react";
import { toast } from 'react-toastify';

function AddTodo(props) {

    const [todoName, setTodoName] = useState('');
    const handleOnclickAddTodo = () => {
        if (!todoName) {
            toast.error("Missing required params!");
            return;
        }
        props.addTodoList({
            id: `${new Date().getTime()}`,
            name: todoName,
        })
        setTodoName('');
    }

    return (
        <div className="add-todo">
             <input type="text" value={todoName}
                onChange={(event) => setTodoName(event.target.value)}/>
            <button type="button" onClick={() => handleOnclickAddTodo()}>Add</button>
        </div>
    )
}

export default AddTodo;