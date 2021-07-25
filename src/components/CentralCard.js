import React from 'react';
import './css/card.css'
import Buttons from './Buttons';

let rupee;

function CentralCard(props) {
    return (
        <div className="card">

           <input type="text" id="fname" name="fname" value={rupee} ></input>
            {console.log(rupee)}
            
            <div className="amount">
                <img src="https://img.icons8.com/windows/32/000000/rupee.png"/>
            </div>

            <div className="buttonComponent1">
                <Buttons name={"Calculate your tax rate"} rupee={rupee}/>
            </div>
            <div className="buttonComponent2">
                <Buttons name={"Calculate your  gross income"}/>
            </div>
        </div>
    );
}

export default CentralCard;