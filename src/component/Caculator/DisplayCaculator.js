import React, {useState} from "react";
import './StyleCaculator.scss';
import ButtonCaculator from "./ButtonCaculator";
import HistoryCaculator from './HistoryCaculator';

function DisplayCaculator() {    
    const [textCaculator, setText] = useState("");
    const [saveCaculator, setSave] = useState([]);

    const saveHistory = (event) => {
        setSave([...saveCaculator, event])
    }

    return(
        <div className="container">
            <HistoryCaculator saveCaculator = {saveCaculator} setSave={setSave}/>
            <ButtonCaculator setText = {setText} textCaculator = {textCaculator} saveHistory = {(event) => saveHistory(event)}/>
        </div>
        // <div className="Caculator">
        //     <h1>Simple Caculator Apps</h1>
        //     <div className="car">
        //         <div className="display">
        //             <input placeholder="0" value={textCaculator} type="text" disabled></input>
        //         </div>
        //         <div className="box">
        //                 <div className="flex-container">
        //                     <div onClick={() => setCaculator("(")}>&#10088;</div>
        //                     <div onClick={() => setCaculator(")")}>&#10089;</div>
        //                     <div onClick={() => setCaculator("%")}>%</div>
        //                     <div style={{background: 'red'}} onClick={() => setCaculator('AC')}>AC</div>
        //                 </div>
        //                 <div className="flex-container">
        //                     <div onClick={() => setCaculator("7")}>7</div>
        //                     <div onClick={() => setCaculator("8")}>8</div>
        //                     <div onClick={() => setCaculator("9")}>9</div>
        //                     <div onClick={() => setCaculator("/")}>&divide;</div>
        //                 </div>
        //                 <div className="flex-container">
        //                     <div onClick={() => setCaculator("4")}>4</div>
        //                     <div onClick={() => setCaculator("5")}>5</div>
        //                     <div onClick={() => setCaculator("6")}>6</div>
        //                     <div onClick={() => setCaculator("*")}>&times;</div>
        //                 </div>
        //                 <div className="flex-container">
        //                     <div onClick={() => setCaculator("1")}>1</div>
        //                     <div onClick={() => setCaculator("2")}>2</div>
        //                     <div onClick={() => setCaculator("3")}>3</div>
        //                     <div onClick={() => setCaculator("-")}>&minus;</div>
        //                 </div>
        //                 <div className="flex-container">
        //                     <div onClick={() => setCaculator(".")}>.</div>
        //                     <div onClick={() => setCaculator("0")}>0</div>
        //                     <div onClick={() => setCaculator("=")}>=</div>
        //                     <div onClick={() => setCaculator("+")}>+</div>
        //                 </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default DisplayCaculator;