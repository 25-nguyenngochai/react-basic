import React , {useState} from "react";
import './StyleTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

function ListTodo() {

    const [listTodo, setListTodo] = useState([]);
    const [ojbTodo, setOjbTodo] = useState({});
    const [showTodo, setShowTodo] = useState(false);

    const addTodoList = (event) => {
        setListTodo([...listTodo, event]);
        toast.success('added todo list successfully!')
    }

    const handleOnclickEdit = (event) =>{
        if (isEmtyObj === false && ojbTodo.id === event.id) {
           if (ojbTodo.name.length > 0) {
                let listTodoCopy = [...listTodo];
                let ojbIndex = listTodoCopy.findIndex(item => item.id === event.id);// findIndex: trả về chỉ số của phần tử đầu tiên trong một mảng đáp ứng chức năng kiểm tra được cung cấp.
                listTodoCopy[ojbIndex].name = ojbTodo.name;
                setListTodo(listTodoCopy);
                setOjbTodo({});
                toast.success("Successfully updated Todo list!");
                return;
           } else {
                toast.error("Missing required params!");
                return;
           }
        }
        else {
            setOjbTodo(event);
        }
    }

    const handleOnchangeEdit = (event) => {
        let editTodo = {...ojbTodo};
        editTodo.name = event.target.value;
        setOjbTodo(editTodo);
    }

    const handleOnclickDelete = (event) =>{
        let deleteTodo = [...listTodo];
        deleteTodo = deleteTodo.filter(item => item.id !== event.id);
        setListTodo(deleteTodo);
    }

    const isEmtyObj = Object.keys(ojbTodo).length === 0 //kiểm tra mảng ojb
    return(
        <div className="list-todo-container">
            <div className="add-todo">
                <AddTodo addTodoList = {(event) => addTodoList(event)} />
                <>{ showTodo === true ?
                    <button onClick={() => setShowTodo(!showTodo)}>Show Todo List</button> : <>
                        <div className="list-todo-content">
                        {
                            listTodo.map((item, index) => {
                                return (
                                <div className="todo-child" key = {item.id}>
                                    {
                                        isEmtyObj === true ? 
                                        <span>{index + 1} - {item.name}</span> :
                                        <>
                                            {
                                                ojbTodo.id === item.id ?
                                                <span>{index + 1} - <input value={ojbTodo.name} onChange={(event) => handleOnchangeEdit(event)}></input></span> :
                                                <span>{index + 1} - {item.name}</span>
                                            }
                                        </>
                                    }
                                    <button onClick={() => handleOnclickEdit(item)}>
                                        {isEmtyObj === false && ojbTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button onClick={() => handleOnclickDelete(item)}>Delete</button>
                                </div>
                                )
                            })
                        }
                        </div>
                    <button onClick={() => setShowTodo(!showTodo)}>Hide Todo List</button>
                </>}</>
            </div>
        </div>
    )
}
export default ListTodo;