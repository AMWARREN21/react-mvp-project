import React from "react";

class InputTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    render() {

        const handleAddTodo = (e) => {
            e.preventDefault()
            this.props.addTodo(this.state.value)
            this.setState({ value: '' })
        }

        const handleChange = (e) => {
            this.setState({ value: e.target.value })
        }


        return (
            <form onSubmit={handleAddTodo}>
                <input
                    id="todo-input"
                    value={this.state.value}
                    type="text"
                    onChange={handleChange}
                    placeholder="Todo"
                    autoComplete="off"
                ></input>
                <input
                    type="submit"
                ></input>
            </form>
        )
    }
}

export default InputTodo