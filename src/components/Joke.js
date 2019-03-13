import React from "react"

function Joke (props) {
    const question = props.question
    const punchLine = props.punchLine
    return (
        <div className="joke">
            <h3 style={{display: question ? "block" : "none"}}>Question: {question}</h3>
            <h3 style={{color: !question && "#888888"}}>Answer: {punchLine}</h3>
            <hr />
        </div>
    )
}

export default Joke;