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
                let ojbIndex = listTodoCopy.findIndex(item => item.id === event.id);// findIndex: trả về chỉ số của phần tử đầu tiên trong một mảng.
                listTodoCopy[ojbIndex].name = ojbTodo.name;
                setListTodo(listTodoCopy);
                setOjbTodo({});
                toast.success("Successfully updated Todo list!");
                return;
           } else {
                toast.error("Missing required params!");
                setOjbTodo({});
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
        if (window.confirm('Are you sure you want to delete?')) {
            let deleteTodo = [...listTodo];
            deleteTodo = deleteTodo.filter(item => item.id !== event.id); //tạo một mảng mới từ một mảng đã cho chỉ bao gồm các phần tử từ mảng đã cho thỏa mãn một điều kiện được đặt bởi phương thức đối số.
            setListTodo(deleteTodo);
            setOjbTodo({});
            toast.success('clear todo list successfully!')
        }
        setOjbTodo({});
    }

    const isEmtyObj = Object.keys(ojbTodo).length === 0 //kiểm tra mảng ojb
    const isEmtyList = Object.keys(listTodo).length === 0
    return(
        <div className="list-todo-container">
            <div className="add-todo">
                <AddTodo addTodoList = {(event) => addTodoList(event)} setOjbTodo = {() => setOjbTodo({})}/>
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
                    <>
                        { isEmtyList === false &&
                            <button onClick={() => setShowTodo(!showTodo, setOjbTodo({}))}>Hide Todo List</button>
                        }
                    </>
                </>}</>
            </div>
        </div>
    )
}
export default ListTodo;