import React, { Component } from 'react';
import TodoItems from './TodoItems';
import '../styles/TodoList.css';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items : [],
            hover : false
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
    }

    deleteItem = (key) => {
        const filteredItems = this.state.items.filter((item) => item.key !== key);  
        this.setState({
            items: filteredItems
        }); 
    }

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
                <TodoItems 
                    entries={this.state.items}
                    delete={this.deleteItem} />
            </div>
        );
    }
}