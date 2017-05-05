/**
 * Created by hieutt on 04/05/2017.
 */
import React from "react";

export class Home extends React.Component {

    constructor(props){
        super();
        this.state = {
            age : props.initialAge,
            status : 0
        };
        setTimeout(()=>{
            this.setState({
                status : 3
            });
        }, 3000);
    }

    onMakeOlder(){
        this.setState({
            age : this.state.age +=3
        });
    }

    render(){
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, you age is {this.state.age}</p>
                <p>Status : {this.state.status}</p>
                <button onClick={()=> this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name : React.PropTypes.string,
    initialAge : React.PropTypes.number,/*
    user : React.PropTypes.object,
    children : React.PropTypes.element.isRequired*/
};