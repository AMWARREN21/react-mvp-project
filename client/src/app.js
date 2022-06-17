import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/todos')
            .then(result => result.json())
            .then((data) => this.setState({ todos: data }))
    }

    render() {
        return (
            <div>Hello World</div>
        )
    }
}

export default App