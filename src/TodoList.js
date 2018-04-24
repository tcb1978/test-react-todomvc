import React, { Component } from 'react';

export default class TodoList extends Component {
    render() {
        return (
            <div className="todoListMain">
                <header>
                    <form>
                        <input placeholder="enter task" />
                        <button type="submit">add</button>
                    </form>
                </header>
            </div>
        );
    }
}