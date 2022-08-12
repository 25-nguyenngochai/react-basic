import React from "react";
import { toast } from 'react-toastify';

function ButtonCaculator(props) {

    const setCaculator = (event) => {
        switch (event) {
            case '=':
                try {
                    // eslint-disable-next-line
                    let result = Function(`"use strict"; return (${props.textCaculator})`)()
                    props.setText(
                        result
                    )
                    //
                    props.saveHistory({
                            id: `${new Date().getTime()}`,
                            caculator: props.textCaculator,
                            total: result
                        })
                   
                } catch (error) {
                    toast.error('There is no calculation or the calculation is wrong!!!')
                }
                break;
            case 'Cl':
                props.setText(props.textCaculator.slice(0, -1))
                break;
            case 'DEL':
                props.setText("")
                break;
            default:
                props.setText(props.textCaculator + event + "")
                break;
        }
    }

    return(
        <div className="calculator">
            <input placeholder="0" value={props.textCaculator} type="text" disabled></input>          
            <button onClick={() => setCaculator('Cl')}>Cl</button>
            <button onClick={() => setCaculator('DEL')}>DEL</button>
            <button onClick={() => setCaculator('%')}>%</button>
            <button onClick={() => setCaculator('/')}>/</button>
            <button onClick={() => setCaculator('7')}>7</button>
            <button onClick={() => setCaculator('8')}>8</button>
            <button onClick={() => setCaculator('9')}>9</button>
            <button onClick={() => setCaculator('*')}>*</button>
            <button onClick={() => setCaculator('4')}>4</button>
            <button onClick={() => setCaculator('5')}>5</button>
            <button onClick={() => setCaculator('6')}>6</button>
            <button onClick={() => setCaculator('-')}>-</button>
            <button onClick={() => setCaculator('1')}>1</button>
            <button onClick={() => setCaculator('2')}>2</button>
            <button onClick={() => setCaculator('3')}>3</button>
            <button onClick={() => setCaculator('+')}>+</button>
            <button onClick={() => setCaculator('0')}>0</button>
            <button onClick={() => setCaculator('.')}>.</button>
            <button className="equal" onClick={() => setCaculator('=')}>=</button>
        </div>
    )
}
export default ButtonCaculator;