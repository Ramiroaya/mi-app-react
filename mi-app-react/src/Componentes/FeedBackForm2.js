//import { useState } from "react";

export default function FeedbackForm2() {
    let name = '';

    function handleClick() {
        name = (prompt("Cual es tu nombre?"));
        alert(`Hola, ${name}!`);
    }
    return (
        <button onClick={handleClick}>
            Saludar
        </button>
    );
}