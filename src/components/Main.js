import React from "react";
import TodoItem from "./TodoItem";

function Main() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        backgroundColor: "#FF2D00",
        fontSize: 24
    }

    if (hours < 12) {
        timeOfDay = "morning";
        styles.color = "#04756F";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        styles.color = "#2E0927";
    } else {
        timeOfDay = "night";
        styles.color = "#D90000";
    }
    return (
        <main>
            <p style={styles}>{timeOfDay}</p>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </main>
    )
};

export default Main;