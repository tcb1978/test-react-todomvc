import React, { Component } from 'react';

export default class TodoItems extends Component {

    deleteKey = (key) => {
        console.log("key is" + key);
        this.props.delete(key);
    }

    createTasks = (item) => <li onClick={() => this.deleteKey(item.key)} key={item.key}>{item.text}</li> 
    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="List">{listItems}</ul>
        )
    }
}