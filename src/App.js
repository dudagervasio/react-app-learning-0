import { useState } from 'react';
import './App.css';

import { Todos } from './components/Todos';
import { AddTodo } from './components/AddTodo';

function App() {

	const [ todos, setTodos ] = useState([]);

	return (
		<div className="App">
			<div className="header">
				TODO´s APP
			</div>
			<AddTodo
				todos={todos}
				setTodos={setTodos}
			 />
			<div className="todos-container">
				<Todos
					todos={todos}
					setTodos={setTodos}
				/>
			</div>
		</div>
	);
}

export default App;
