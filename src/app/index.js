/**
 * Created by hieutt on 03/05/2017.
 */
import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    constructor(){
        super();
        this.state = {
          homeLink : "Home",
          homeMounted: true
        };
    }

    onGreet(){
        alert("Hello!");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink : newName
        });
    }

    onChangeHomeMounted(){
        this.setState({
            homeMounted : !this.state.homeMounted
        });
    }

    render() {
        let homeCpn = "";
        if(this.state.homeMounted){
            homeCpn = (
                <Home
                    name={"Max"}
                    initialAge={27}
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                ></Home>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}></Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCpn}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={()=> this.onChangeHomeMounted()} className="btn btn-primary"> (Un)mount Home Compoent</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));