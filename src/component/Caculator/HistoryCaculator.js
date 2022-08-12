import React, {useState} from "react";
import { toast } from 'react-toastify';

function HistoryCaculator(props) {
    const [show, setShow] = useState(false);

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete?')) 
        props.setSave([]);
        toast.success('Successful delete!!!')

    }

    const isEmtyList = Object.keys(props.saveCaculator).length === 0

    return(
        <div className="modal-caculator">
            <div className="btnmodal" onClick={() => setShow(!show)}>
                <i className="fa-solid fa-clock-rotate-left"></i>
            </div>
            <>{ show === true &&
                <div className="modal">
                    <div className="modal-content">
                        <h2 className="history">Lịch sử phép tính</h2>
                        { 
                            isEmtyList === true ?
                            <span className="notification">Tất cả các kết quả và phép tính được hiển thị ở đây!!!</span> :
                            <>
                            <span className="delete"><i onClick={() => handleDelete()} class="fa-solid fa-trash-can"></i></span>
                            {
                                props.saveCaculator.map((item, index) => {
                                    return(
                                        <div className="history-caculator" key={item.id}>
                                            <span>{index +1 } . {item.caculator} = {item.total}</span>
                                        </div>
                                    )
                                })
                            }
                            </>
                        }
                        <button className="close" onClick={() => setShow(!show)}>x</button>
                    </div>
            </div>}</>
        </div>
    )
}
export default HistoryCaculator;