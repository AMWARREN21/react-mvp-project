import React from "react";

class Header extends React.Component {
    render() {

        return (
            <div className="navigation-bar">
                <a href="/home" className="title">Todo-List</a>
                <nav>
                    <a href="/complete" className="complete">Completed</a>
                    <a href="/incomplete" className="incomplete">Incomplete</a>
                </nav>
            </div>
        )
    }
}

export default Header