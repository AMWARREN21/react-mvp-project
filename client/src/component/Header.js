import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <h1 className="title">Todo-List</h1>
                <nav>
                    <a className="complete">Completed</a>
                    <a className="incomplete">Incomplete</a>
                </nav>
            </div>
        )
    }
}

export default Header