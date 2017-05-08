/**
 * Created by hieutt on 04/05/2017.
 */
import React from "react";

export class Home extends React.Component {

    constructor(props){
        super();
        this.state = {
            age : props.initialAge,
            status : 0,
            homeLink : props.initialLinkName
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

    onChangeLink(){
        console.log(this.state);
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        console.log(this.state);
        this.setState({
            homeLink: event.target.value
        });
    }

    render(){
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, you age is {this.state.age}</p>
                <p>Status : {this.state.status}</p>
                <button onClick={()=> this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text"
                       value={this.state.homeLink}
                       onChange={(event)=> this.onHandleChange(event)} />
                <hr/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name : React.PropTypes.string,
    initialAge : React.PropTypes.number,
    greet : React.PropTypes.func,
    initialLinkName : React.PropTypes.string,/*
    user : React.PropTypes.object,
    children : React.PropTypes.element.isRequired*/
};