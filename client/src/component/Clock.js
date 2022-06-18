import React from "react";

export default class Clock extends React.Component {
    render() {
        return (
            <h1 className="time">{this.props.clock}</h1>
        )
    }
}