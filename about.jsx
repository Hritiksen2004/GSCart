// Importing React library
import React from 'react'
// In class components, you extend React.Component to use React’s features
class About extends React.Component {

    // Constructor: called once when the component is created (before it’s displayed)
    constructor() {
        super()  // calls the parent class (React.Component) constructor
        console.log("constructor")

        // Setting up the initial state for the component
        // State is like a variable that React keeps track of and re-renders the UI when it changes
        this.state = {
            name: "Ashish",
            count: 0
        }
    }

    // componentDidMount(): runs once after the component is added to the DOM (rendered on screen)
    // Commonly used for API calls or initial setup
    componentDidMount() {
        console.log("Did mount")
    }

    // componentDidUpdate(): runs every time the component updates (for example, when state or props change)
    componentDidUpdate() {
        console.log("Did update")
    }

    // componentWillUnmount(): runs right before the component is removed from the screen
    // Commonly used to clean up (like removing timers or event listeners)
    componentWillUnmount() {
        console.log("Will unmount")
    }

    // render(): required method in every class component
    // It returns the JSX that will be displayed on the screen
    render() {
        return (
            <div>
                {/* Displaying current count value from the component’s state */}
                <h1>Hello {this.state.count}</h1>

                {/* Button that increases the count when clicked.
                    setState() is used to update the state.
                    Updating the state triggers re-render and componentDidUpdate().
                */}
                <button 
                    onClick={() => this.setState({ count: this.state.count + 1 })}
                >
                    Increment
                </button>
            </div>
        )
    }
}

// Exporting the component so it can be used in other files
export default About
