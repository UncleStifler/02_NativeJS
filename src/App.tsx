import React from 'react';
import './App.css';
import {v1} from "uuid";

function App() {

    const names = ['Dimych', 'Sveta', 'Valera', 'Stepan', "Viktor", 'Ignat']
    const users = [
        {name: 'Dimych'},
        {name: 'Sveta'},
        {name: 'Valera'},
        {name: 'Stepan'},
        {name: "Viktor"},
        {name: 'Ignat'}]

    const liElements = names.map(n => <li key={v1()}>{n}</li>)
    const liElements2 = users.map(u => <li key={v1()}>{u.name}</li>)

    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
            <li>
                {liElements2}
            </li>
        </div>
    );
}

export default App;
