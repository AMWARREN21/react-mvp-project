import React from "react";
import InputTodo from "./component/InputTodo";
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

    componentDidUpdate(prevState) {
        if (prevState.todos !== this.state.todos) {
            this.componentDidMount()
        }
    }


    render() {

        const addTodo = (newTodo) => {
            const obj = {
                "todo": newTodo
            }
            fetch('http://localhost:8000/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                body: JSON.stringify(obj)
            })
            this.setState({ todos: [...this.state.todos, newTodo] })
        }

        if (this.state.loading) {
            return (<h1>{this.state.loadingMessage}</h1>)
        }

        return (
            <>
                <InputTodo addTodo={addTodo} />
                <Todos todos={this.state.todos} />
            </>
        )
    }
}

export default App