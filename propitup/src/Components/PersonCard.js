import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const {firstname, lastname, age, haircolor} = this.props;
        return (
            <div>
                <h1>{lastname }, {firstname }</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {haircolor}</p>
            </div>
        );
    }
}
export default PersonCard

