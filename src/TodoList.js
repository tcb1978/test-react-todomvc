import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items : []
        };

    }

    addItem = (event) => {
        event.preventDefault();
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now() // for unique key
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value = ''; // clear form
        console.log(this.state.items);
    };

    render() {
        return (
            <div className="todoListMain">
                <header>
                    <form onSubmit={this.addItem}>
                        <input 
                            ref={(a) => this._inputElement = a}
                            placeholder="enter task" autoFocus/>
                        <button type="submit">add</button>
                    </form>
                </header>
                <TodoItems entries={this.state.items} />
            </div>
        );
    }
}