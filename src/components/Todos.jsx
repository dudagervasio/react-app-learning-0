
export const Todos = ({ todos, setTodos }) => {

	const removeTodo = (e) => {

		const todoId = e.target.getAttribute('todoid');

		todos.splice(todoId, 1);

		setTodos([...todos]);
		
	}

	return (
		<>
		{ todos.length === 0 
			? <div>Nenhum todo</div>
			: todos.map( (todo, index) => (
				<div key={index} className="todo">
					<div className="todo-text">{todo.text}</div>
					<div className="actions">
						<button onClick={removeTodo} todoid={index} className="btn-remove" data-testid={`btn-finalizar-${index}`}>Finalizar</button>
					</div>				
				</div>
			))
		}
		</>
	)

};