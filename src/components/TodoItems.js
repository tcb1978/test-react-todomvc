import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

export default class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isHovered: false
        })
    }

    deleteKey = (key) => {
        this.props.delete(key);
    }

    createTasks = (item) => <li onClick={() => this.deleteKey(item.key)} key={item.key}>{item.text}</li>

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);
        const counter = listItems.length;
        let status;
        if (counter === 0) {
            status = '';
        }
        else if (counter === 1) {
            status = ' item';
        } else {
            status = ' items';
        }
        return (
            <div>
                <ul className="List">
                    <FlipMove 
                        duration={250} 
                        easing="ease-out">
                        {listItems}
                    </FlipMove>
                </ul>
                <aside><strong>{counter === 0 ? '' : `${counter} ${status}`}</strong></aside>
            </div>
        )
    }
}