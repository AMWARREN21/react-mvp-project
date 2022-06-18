import React from "react";

class DeleteButton extends React.Component {
    render() {
        const DeleteTodo = (e) => {
            this.props.DeleteTodo(e)
        }
        return (
            <button className="delete" onClick={DeleteTodo}>Erase</button>
        )
    }
}

export default DeleteButton