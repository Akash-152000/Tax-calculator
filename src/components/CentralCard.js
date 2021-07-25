import React, { Component } from 'react';
import './css/card.css'
import Buttons from './Buttons';

class CentralCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            money:0,
            finalAnswer:0
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }


    handleClick = (e) =>{
        this.setState({money:e.target.value})
    }

    handleClick1 =(amount) =>{
        var gi= amount;
        console.log("first",gi)
        var tr=0; 
        if(gi<=400000){
        tr=0;
        }
        else{
        
        if(gi>300001 && gi<=800000){
            tr+=3750;
            gi-=300000;
            tr+=(gi/100)*10;
        }

        if(gi>800001 && gi<=10000000){
            tr+=50000+3750;
            gi-=800000;
            tr+=(gi/100)*25;

        
        }

        if(gi>10000001){
            tr+=2300000+50000+3750;
            gi-=10000000;
            tr+=(gi/100)*30;
        }
        }
        console.log(tr);
        this.setState({finalAnswer:Math.floor(tr)})
    }

    handleClick2 = (amount) =>{
        let ni=amount;
        console.log("second",ni)
        let gi=0;
        let ti=ni;

        if(ni <= 400000){
        gi=ni;
        }
        else{
        gi=gi+300000;
        ni=ni-296250;

        if(ti>=300001 && ti<=800000){
            gi=gi+(ni/0.9);
        }
        if(ti>=800001 && ti<=10000000){
            gi=gi+500000;
            ni=ni-450000;
            gi=gi+(ni/0.75); 
        }
        if(ti>=10000001){
            gi=gi+450000+9200000;
            ni=ni-2300000;
            gi=gi+(ni/0.70); 
        }
        }
        console.log(Math.floor(gi));
        this.setState({finalAnswer:Math.floor(gi)})
    }


    render() {
        return (
            <div className="card">

                <input type="text" value={this.state.money} onChange={this.handleClick}></input>
            
                <div className="amount">
                    <img src="https://img.icons8.com/windows/32/000000/rupee.png"/>
                    <h1>{this.state.finalAnswer}</h1>
                </div>

                <div className="buttonComponent1">
                    <Buttons name={"Calculate your tax rate"} money={this.state.money} handleClick={this.handleClick1}/>
                </div>
                <div className="buttonComponent2">
                    <Buttons name={"Calculate your  gross income"} money={this.state.money} handleClick={this.handleClick2}/>
                </div>
            </div>
        );
    }
}

export default CentralCard;


