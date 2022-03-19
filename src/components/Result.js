import React from 'react'
import './result.css'

export default function Result() {
    return ( <
        >
        <
        div id = "myModal"
        className = "modal fade"
        role = "dialog" / >
        <
        div className = "modal-dialog" / >
        <
        div className = "modal-content" / >
        <
        div className = "modal-header" >
        <
        h3 > RESULT < /h3>

        <
        /div>

        <
        h2 >
        Total Questions:
        <
        /h2> <
        br / >

        <
        h2 >
        Unattempted Questions:
        <
        /h2> <
        br / >

        <
        h2 >
        Attempted Questions:
        <
        /h2> <
        br / >

        <
        h2 >
        Score:
        <
        /h2> <
        br / >
        <
        div className = "container" >

        <
        button className = "btn btn-outline-success mx-5"
        type = "submit" >
        Give Feedback <
        /button>

        <
        /div>


        <
        />
    )
}