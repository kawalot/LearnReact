import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <p style={{color: !props.item.completed && "#888"}}><input type="checkbox" checked={props.item.completed}/>{props.item.text}</p>
        </div> 
    )
};

export default TodoItem;