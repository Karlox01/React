import React from "react";

// function FunctionalGreetingWithProps() { THIS IS VANILLA JAVASCRIPT , REPLACED BY ARROW FUNCTIONS NOW!
//     return <h1>Hello</h1>
// }

// const FunctionalGreetingWithProps = (props) => <h1>Hello</h1>;
const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello {props.name}! I see that you're {props.age} years old; {props.greeting}</h1>;
} // {} are required if you want to inject any props into html 

export default FunctionalGreetingWithProps // required in order to export this function to app.js / 