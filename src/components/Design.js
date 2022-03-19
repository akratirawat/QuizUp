import React from 'react';
import './design.css';

export default function Design() {
    return ( <
        >
        <
        div className = 'container mt-sm-5 my-1' >
        <
        div className = 'question ml-sm-5 pl-sm-5 pt-2' >
        <
        div className = 'py-2 h5' >
        <
        b > Q1. < /b> <
        /div> <
        div className = 'ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3'
        id = 'options' >
        <
        label className = 'options' >
        option a < input type = 'radio'
        name = 'radio' / >
        <
        span className = 'checkmark' > < /span> <
        /label> <
        label className = 'options' >
        option b < input type = 'radio'
        name = 'radio' / >
        <
        span className = 'checkmark' > < /span> <
        /label> <
        label className = 'options' >
        option c < input type = 'radio'
        name = 'radio' / >
        <
        span className = 'checkmark' > < /span> <
        /label> <
        label className = 'options' >
        option d < input type = 'radio'
        name = 'radio' / >
        <
        span className = 'checkmark' > < /span> <
        /label> <
        /div> <
        /div> <
        div className = 'd-flex align-items-center pt-3 ' >
        <
        div id = 'prev' >
        <
        button className = 'btn btn-primary mx-5' > Previous < /button> <
        /div> <
        div className = 'ml-auto mr-sm-5' >
        <
        button className = 'btn btn-success mx-5' > Next < /button> <
        button className = 'btn btn-success mx-5' > End Quiz < /button> <
        /div> <
        /div> <
        /div> <
        />
    );
}