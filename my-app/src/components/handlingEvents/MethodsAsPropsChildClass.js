import React, { Component } from 'react'

// This is how a class would look like stateful component would look like



export class MethodsAsPropsChildClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    handleSignIn = () => {
        this.setState({ isLoggedIn: true })
    }
    handleSignOut = () => {
        this.setState({ isLoggedIn: false })
    }
    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site! Please complete the steps below:</p>
                        <ol>
                            <li>Confirm your email</li>
                            <li>Complete your profile</li>
                            <li>Subscribe to the newsletter</li>
                        </ol>
                        <button onClick={this.handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <div>
                        <p>Please sign in</p>
                        <button onClick={this.handleSignIn}>Sign In</button>
                    </div>
                    )
                }
            </div>
        )
    }
}