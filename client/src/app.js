import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from "./component/Header";
import Home from "./pages/Home";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: null,
            loading: true,
            loadingMessage: 'Please be patient',
            date: new Date(),
            timerID: setInterval(() => this.tick(), 1000),
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

    tick() {
        this.setState({ date: new Date() })
    }


    render() {

        const addTodo = (newTodo) => {
            fetch('http://localhost:8000/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                body: JSON.stringify({ "todo": newTodo })
            })
            this.setState({ todos: [...this.state.todos, newTodo], editing: false })
        }

        const singleTodo = (e) => {
            fetch(`http://localhost:8000/api/todos/${e.target.parentNode.parentNode.id}`)
                .then(response => response.json())
                .then((data) => this.setState({ editText: data }))
        }

        const DeleteTodo = (e) => {
            fetch(`http://localhost:8000/api/todos/${e.target.parentNode.parentNode.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            })
            const todos = this.state.todos.filter(todo => todo.todo_id !== parseInt(e.target.parentNode.id))
            this.setState({ todos: todos })
        }

        const handleEdit = (e) => {
            fetch(`http://localhost:8000/api/todos/${e.target.parentNode.parentNode.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            })
            const todos = this.state.todos.filter(todo => todo.todo_id !== parseInt(e.target.parentNode.id))
            this.setState({ todos: todos, editing: true })
            singleTodo(e)
        }

        if (this.state.loading) {
            return (<h1>{this.state.loadingMessage}</h1>)
        }

        return (
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path='/home' element={
                        <Home todos={this.state.todos}
                            addTodo={addTodo}
                            DeleteTodo={DeleteTodo}
                            clock={this.state.date.toLocaleTimeString()}
                        />} />
                </Routes>
            </>
        )
    }
}

export default App