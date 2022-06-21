import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from "./component/Header";
import CompletedPage from "./pages/Completed";
import IncompletePage from "./pages/Incomplete"
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
        fetch('https://todo-react-mvp.herokuapp.com/api/todos')
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

        const toggle = (e) => {
            const elem = document.getElementById(`${e.target.parentNode.parentNode.id}`)
            elem.classList.toggle('true')
            elem.classList.toggle('false')
        }

        const addTodo = (newTodo) => {
            fetch('http://localhost:8000/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                body: JSON.stringify({ "todo": newTodo })
            })
            this.setState({ todos: [...this.state.todos, newTodo] })
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
            toggle(e)
            let completed = e.target.parentNode.parentNode.classList[1]
            fetch(`http://localhost:8000/api/todos/${e.target.parentNode.parentNode.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                body: JSON.stringify({ completed: completed })
            })
            this.setState({ todos: this.state.todos })
        }

        if (this.state.loading) {
            return (<h1>{this.state.loadingMessage}</h1>)
        }

        const state = {
            todos: this.state.todos,
            addTodo: addTodo,
            DeleteTodo: DeleteTodo,
            clock: this.state.date.toLocaleTimeString(),
            handleEdit: handleEdit
        }

        return (
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path='/home' element={<Home state={state} />} />
                    <Route path="/complete" element={<CompletedPage state={state} />} />
                    <Route path="/incomplete" element={<IncompletePage state={state} />} />
                </Routes>
            </>
        )
    }
}

export default App