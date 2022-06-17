import React from "react";
import Todos from "./component/Todos";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: null,
            loading: true,
            loadingMessage: 'Please be patient'
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/todos')
            .then(result => result.json())
            .then((data) => this.setState({ todos: data, loading: false }))
    }

    render() {

        if (this.state.loading) {
            return (<h1>{this.state.loadingMessage}</h1>)
        }

        return (
            <Todos todos={this.state.todos} />
        )
    }
}

export default App