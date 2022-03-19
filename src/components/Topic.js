import React, { Component } from 'react'

export default class Topic extends Component {
    constructor() {
        super();
        this.state = {
            topic: ''
        };
    }
    myArray = ['Probability', 'Percentage', 'Average', 'Calendar', 'Volume', 'Area', 'Clock', 'Simple Interest', 'Profit & Loss', 'Logarithm', 'Compound Interest']
    componentDidMount() {
        setInterval(() => {
            this.setState({ topic: this.myArray[Math.floor(Math.random() * this.myArray.length)] });
        }, 1000);
    }
    render() {
        return ( <
            div >
            <
            h1 style = {
                { textAlign: "center", margin: "70px", textShadow: "4px 4px 10px white" } } >
            QUIZUP includes a wide number of questions on <
            /h1>

            <
            h1 style = {
                { textAlign: "center", margin: "70px", textShadow: "4px 4px 10px white" } } > { this.state.topic }

            <
            /h1> <
            /div>
        );
    }
};