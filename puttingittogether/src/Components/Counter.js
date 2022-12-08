import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ageCounter: this.props.age,
        };
    }

    birthdayFun=() => {
        this.setState({ ageCounter : this.state.ageCounter + 1 });
    }


    render() {
        const {firstname, lastname, age, haircolor} = this.props;
        return (
            <div>
                <h1>{lastname }, {firstname }</h1>
                <p>Age: {this.state.ageCounter}</p>
                <p>Hair Color: {haircolor}</p>
                <button onClick= { this.birthdayFun}>Birthday button for {firstname } {lastname }</button>
            </div>
        );
    }
}
export default Counter

