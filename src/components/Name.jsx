import React from 'react';

export default class Name extends React.Component {
    render() {
        return (
            <strong>{this.props.firstName} {this.props.lastName}</strong>
        )
    }
}