import React from "react"; // You could also do it this way import React { Component }from "react";


class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props); // You must always call the super function inside a constructor function, This ensure the react.component is also called.
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count : 0

        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous state:', prevState)
            console.log('Previous props:', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }




    // This code would not be correct but it would work         {
    //             introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
    //             buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
    //         },
    //         () => {
    //             console.log('new state', this.state.introduction)
    //         }
    //     );
    //     console.log(this.state.introduction)
    // }


    increment() {
        this.setState((prevState, prevProps) => {
            console.log('Previous state:', prevState)
            console.log('Previous props:', prevProps)
            return {
                count: prevState.count + 1
            }
        })
    }








// Below is the wrong way of making this function 
//     increment() {
//         this.setState({
//             count: this.state.count + 1
//         })
//         console.log(this.state.count)
//     }
// React works in such way that it wont log this 5 times even tho the function calls for 5 increments , For better performance it will only render it once.
    // incrementFive(){
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    // }


    render() {
        return (
            <div>
                <h1> {this.state.introduction} {this.props.greeting} and my name is {this.props.name} </h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>Increment</button>
                <p>Youve clicked {this.state.count} times</p>
            </div>
        )
    }
}

// class StatefulGreeting extends Component { This will work if you do the comment out import above.




export default StatefulGreeting;