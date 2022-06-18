import React from "react";
import InputTodo from "./InputTodo";

class EditButton extends React.Component {
    render() {
        const handleEdit = (e) => {
            this.props.handleEdit(e)
        }

        return (
            <>
                <button onClick={handleEdit}>Edit</button>
            </>
        )
    }
}

export default EditButton